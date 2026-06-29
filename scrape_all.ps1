# PowerShell script to scrape all products from biokominkigmt.pl with correct UTF-8 decoding
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Add-Type -AssemblyName System.Web

$categories = @{
    "https://biokominkigmt.pl/pl/c/WISZACE/22" = "interior"
    "https://biokominkigmt.pl/pl/c/PORTALOWE/23" = "interior"
    "https://biokominkigmt.pl/pl/c/WOLNOSTOJACE/26" = "garden"
    "https://biokominkigmt.pl/pl/c/OGROD/27" = "garden"
    "https://biokominkigmt.pl/pl/c/AKCESORIA/25" = "accessories"
    "https://biokominkigmt.pl/pl/c/PALNIKI-DO-BIOKOMINKOW-DIY/39" = "accessories"
}

$destFolder = "C:\Users\bacho\.gemini\antigravity\scratch\gmt-biokominki-web"
$assetsFolder = Join-Path $destFolder "assets"
if (!(Test-Path $assetsFolder)) {
    New-Item -ItemType Directory -Path $assetsFolder | Out-Null
}

function Clean-PolishText($text) {
    if (!$text) { return "" }
    # Decode HTML entities if any
    $text = [System.Web.HttpUtility]::HtmlDecode($text)
    # Shoper sometimes has extra spaces or line breaks, let's normalize
    $text = $text -replace '\s+', ' '
    return $text.Trim()
}

$allProducts = @()

foreach ($url in $categories.Keys) {
    $categoryName = $categories[$url]
    Write-Host "Scraping category: $url -> $categoryName"
    
    try {
        # Fetch raw data and decode specifically as UTF-8
        $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30
        
        # Get raw bytes to decode as UTF8
        $stream = $response.RawContentStream
        $stream.Position = 0
        $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
        $html = $reader.ReadToEnd()
        $reader.Close()
        
        # Parse products using regex matching
        $blocks = [regex]::Matches($html, '(?s)<div\s+data-product-id="(\d+)"[^>]*class="[^"]*product[^"]*".*?</div\s*>')
        Write-Host "Found $($blocks.Count) products in this category"
        
        foreach ($block in $blocks) {
            $blockText = $block.Value
            $productId = $block.Groups[1].Value
            
            # Extract name
            $namePl = ""
            if ($blockText -match 'class="productname">([^<]+)</span>') {
                $namePl = Clean-PolishText $Matches[1]
            }
            
            # Extract image URL
            $imgUrl = ""
            if ($blockText -match 'data-src="([^"]+)"') {
                $imgUrl = $Matches[1].Trim()
            } elseif ($blockText -match 'src="([^"]+)"' -and $Matches[1] -notmatch 'data:image') {
                $imgUrl = $Matches[1].Trim()
            }
            
            # Extract price (PLN)
            $priceText = ""
            $priceVal = 0
            if ($blockText -match 'class="color">([^<]+)</em>') {
                $priceText = $Matches[1].Trim()
                # Clean price (e.g. 629,10 zł -> 629.10)
                $cleanPrice = $priceText -replace '[^\d,]', ''
                $cleanPrice = $cleanPrice -replace ',', '.'
                if ([double]::TryParse($cleanPrice, [ref]$priceVal)) {
                    # Parsed successfully
                }
            }
            
            # Extract detail link
            $detailLink = ""
            if ($blockText -match 'href="([^"]*/pl/p/[^"]+)"') {
                $detailLink = $Matches[1].Trim()
                if ($detailLink -notmatch '^http') {
                    $detailLink = "https://biokominkigmt.pl" + $detailLink
                }
            }
            
            # If we don't have priceVal, try alternative match
            if ($priceVal -eq 0 -and $blockText -match 'class="price row">.*?<em>([^<]+)</em>') {
                $priceText = $Matches[1].Trim()
                $cleanPrice = $priceText -replace '[^\d,]', ''
                $cleanPrice = $cleanPrice -replace ',', '.'
                [double]::TryParse($cleanPrice, [ref]$priceVal) | Out-Null
            }
            
            # Download image locally to assets/
            $localImgName = "product_" + $productId + ".webp"
            $localImgPath = Join-Path $assetsFolder $localImgName
            $relativeImgPath = "assets/" + $localImgName
            
            if ($imgUrl -and !(Test-Path $localImgPath)) {
                if ($imgUrl -notmatch '^http') {
                    $fullImgUrl = "https://biokominkigmt.pl" + $imgUrl
                } else {
                    $fullImgUrl = $imgUrl
                }
                
                try {
                    Write-Host "Downloading image for $($productId) - $($fullImgUrl)"
                    Invoke-WebRequest -Uri $fullImgUrl -OutFile $localImgPath -TimeoutSec 15 | Out-Null
                } catch {
                    Write-Host "Failed to download image: $_"
                    $relativeImgPath = "assets/$categoryName.jpg"
                }
            } elseif (!$imgUrl) {
                $relativeImgPath = "assets/$categoryName.jpg"
            }
            
            # Add to list
            $allProducts += @{
                id = $productId
                category = $categoryName
                namePl = $namePl
                pricePln = $priceVal
                image = $relativeImgPath
                detailLink = $detailLink
            }
        }
    } catch {
        Write-Host "Error scraping category: $_"
    }
}

# Write raw scraped products to JSON in UTF-8
$jsonPath = Join-Path $destFolder "scraped_products.json"
$json = $allProducts | ConvertTo-Json -Depth 5
# Write using UTF-8 encoding specifically
[System.IO.File]::WriteAllText($jsonPath, $json, [System.Text.Encoding]::UTF8)

Write-Host "Scraped $($allProducts.Count) products total. Saved to $jsonPath"
