/**
 * GMT Biofireplaces - Clean Product Catalog & Cloud Storage Manager
 * All prices are unassigned (null) by default and managed via Admin Panel & Cloud Database.
 */

const CLOUD_CONFIG = {
  // Public REST API endpoint for Cloud Storage (JSONBin.io / KV Endpoint)
  endpoint: "https://api.jsonbin.io/v3/b/66eb891fac15049c04297312",
  apiKey: "$2a$10$7vW1OqM3kK9XwJ3M3J3M3e", // Master Key for cloud sync
  storageKey: "gmt_bio_prices_v1"
};

const PRODUCTS = [
  // --- FREESTANDING & GARDEN (თავისუფლად მდგომი და ბაღის) ---
  {
    id: "002.01.001.01",
    ean: "5905279687851",
    category: "garden",
    nameGe: "ბიოკამინი Sunset Garden – შავი",
    nameEn: "Biofireplace Freestanding Sunset Garden – Black",
    dimensions: "40 × 40 × 52 სმ",
    weight: "12.5 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი (მქრქალი)"],
    colorNamesEn: ["Black Matte"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_sunset_garden.jpg",
    descGe: "პრემიუმ კლასის გარე და შიდა ბიოკამინი ოთხმხრივი დამცავი მინით. უძლებს ქარსა და ამინდის ცვლილებას.",
    descEn: "Premium outdoor & indoor freestanding biofireplace with 4-sided protective glass."
  },
  {
    id: "002.03.002.01",
    ean: "5905279687875",
    category: "garden",
    nameGe: "ბიოკამინი Sunset Garden – თეთრი",
    nameEn: "Biofireplace Freestanding Sunset Garden – White",
    dimensions: "40 × 40 × 52 სმ",
    weight: "12.5 კგ",
    colors: ["#f5f5f7"],
    colorNamesGe: ["თეთრი"],
    colorNamesEn: ["White"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_sunset_garden.jpg",
    descGe: "დახვეწილი თეთრი დიზაინის ბიოკამინი ტერასისა და მისაღები ოთახისთვის.",
    descEn: "Elegant white freestanding biofireplace for terrace and living room."
  },
  {
    id: "002.07.004.01",
    ean: "5905279687882",
    category: "garden",
    nameGe: "ბიოკამინი Sunset Garden – ნაცრისფერი",
    nameEn: "Biofireplace Freestanding Sunset Garden – Gray",
    dimensions: "40 × 40 × 52 სმ",
    weight: "12.5 კგ",
    colors: ["#7d7d7d"],
    colorNamesGe: ["ნაცრისფერი"],
    colorNamesEn: ["Gray"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_sunset_garden.jpg",
    descGe: "თანამედროვე ნაცრისფერი მოდელი მინის დამცავი კონსტრუქციით.",
    descEn: "Modern gray freestanding biofireplace with protective glass."
  },
  {
    id: "002.06.003.01",
    ean: "5905279687868",
    category: "garden",
    nameGe: "ბიოკამინი Sunset Garden – ყავისფერი",
    nameEn: "Biofireplace Freestanding Sunset Garden – Brown",
    dimensions: "40 × 40 × 52 სმ",
    weight: "12.5 კგ",
    colors: ["#4a2e1b"],
    colorNamesGe: ["ყავისფერი"],
    colorNamesEn: ["Brown"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_sunset_garden.jpg",
    descGe: "თბილი ყავისფერი ტონის ბიოკამინი ეზოებისა და ბაღებისთვის.",
    descEn: "Warm brown tone biofireplace for gardens and patios."
  },
  {
    id: "002.01.029.01",
    ean: "5902730355540",
    category: "garden",
    nameGe: "ბიოკამინი Sunset Garden Mini – შავი",
    nameEn: "Biofireplace Sunset Garden Mini – Black",
    dimensions: "26 × 33 × 26 სმ",
    weight: "6 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი"],
    colorNamesEn: ["Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_sunset_garden.jpg",
    descGe: "კომპაქტური ბაღის ბიოკამინი მაგიდაზე განსათავსებლად.",
    descEn: "Compact garden biofireplace ideal for outdoor dining tables."
  },
  {
    id: "002.03.030.01",
    ean: "5902730355618",
    category: "garden",
    nameGe: "ბიოკამინი Sunset Garden Mini – თეთრი",
    nameEn: "Biofireplace Sunset Garden Mini – White",
    dimensions: "26 × 33 × 26 სმ",
    weight: "6 კგ",
    colors: ["#ffffff"],
    colorNamesGe: ["თეთრი მქრქალი"],
    colorNamesEn: ["White Matte"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_sunset_garden.jpg",
    descGe: "კომპაქტური თეთრი მაგიდის ბიოკამინი.",
    descEn: "Compact white tabletop biofireplace."
  },
  {
    id: "002.01.012.01",
    ean: "5905279687264",
    category: "freestanding",
    nameGe: "ბიოკამინი Smart – შავი",
    nameEn: "Biofireplace Smart – Black",
    dimensions: "13 × 13 × 17 სმ",
    weight: "1.5 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი"],
    colorNamesEn: ["Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_smart.jpg",
    descGe: "მინიმალისტური მაგიდის ბიოკამინი. შესანიშნავია რესტორნების, ბარის მაგიდებისა და სახლისთვის.",
    descEn: "Minimalist tabletop biofireplace designed for coffee tables & restaurant dining."
  },
  {
    id: "002.03.013.01",
    ean: "5905279687288",
    category: "freestanding",
    nameGe: "ბიოკამინი Smart – თეთრი",
    nameEn: "Biofireplace Smart – White",
    dimensions: "13 × 13 × 17 სმ",
    weight: "1.5 კგ",
    colors: ["#ffffff"],
    colorNamesGe: ["თეთრი"],
    colorNamesEn: ["White"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_smart.jpg",
    descGe: "მინიმალისტური თეთრი მაგიდის ბიოკამინი.",
    descEn: "Minimalist white tabletop biofireplace."
  },
  {
    id: "002.07.015.01",
    ean: "5905279687271",
    category: "freestanding",
    nameGe: "ბიოკამინი Smart – ნაცრისფერი",
    nameEn: "Biofireplace Smart – Gray",
    dimensions: "13 × 13 × 17 სმ",
    weight: "1.5 კგ",
    colors: ["#808080"],
    colorNamesGe: ["ნაცრისფერი"],
    colorNamesEn: ["Gray"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_smart.jpg",
    descGe: "დახვეწილი ნაცრისფერი მაგიდის ბიოკამინი.",
    descEn: "Sleek gray tabletop biofireplace."
  },
  {
    id: "002.01.023.00",
    ean: "5902730355144",
    category: "freestanding",
    nameGe: "ბიოკამინი Universe – შავი",
    nameEn: "Biofireplace Universe – Black",
    dimensions: "60 × 15 × 60 სმ",
    weight: "14.75 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი"],
    colorNamesEn: ["Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_universe.jpg",
    descGe: "მრგვალი, ფუტურისტული დიზაინის ბიოკამინი. ქმნის შთამბეჭდავ ცენტრალურ ატმოსფეროს.",
    descEn: "Round futuristic design biofireplace creating a dramatic focal point."
  },
  {
    id: "002.03.024.00",
    ean: "5902730355137",
    category: "freestanding",
    nameGe: "ბიოკამინი Universe – თეთრი",
    nameEn: "Biofireplace Universe – White",
    dimensions: "60 × 15 × 60 სმ",
    weight: "14.75 კგ",
    colors: ["#ffffff"],
    colorNamesGe: ["თეთრი"],
    colorNamesEn: ["White"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_universe.jpg",
    descGe: "მრგვალი თეთრი ფუტურისტული ბიოკამინი.",
    descEn: "Round white futuristic biofireplace."
  },
  {
    id: "002.01.020.00",
    ean: "5902730355014",
    category: "freestanding",
    nameGe: "ბიოკამინი Moon – შავი",
    nameEn: "Biofireplace Moon – Black",
    dimensions: "47.5 × 32.5 სმ",
    weight: "12.55 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი"],
    colorNamesEn: ["Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_moon.jpg",
    descGe: "ცილინდრული ფორმის პრემიუმ ბიოკამინი დეკორატიული თეთრი ქვებით.",
    descEn: "Cylindrical premium biofireplace with decorative white stones."
  },
  {
    id: "002.03.021.00",
    ean: "5902730355007",
    category: "freestanding",
    nameGe: "ბიოკამინი Moon – თეთრი",
    nameEn: "Biofireplace Moon – White",
    dimensions: "47.5 × 32.5 სმ",
    weight: "12.55 კგ",
    colors: ["#ffffff"],
    colorNamesGe: ["თეთრი"],
    colorNamesEn: ["White"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_moon.jpg",
    descGe: "ცილინდრული თეთრი ბიოკამინი.",
    descEn: "Cylindrical white biofireplace."
  },
  {
    id: "002.01.035.00",
    ean: "5902730356134",
    category: "freestanding",
    nameGe: "ბიოკამინი Moon Mini – შავი",
    nameEn: "Biofireplace Moon Mini – Black",
    dimensions: "23 × 29 სმ",
    weight: "6.4 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი"],
    colorNamesEn: ["Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_moon.jpg",
    descGe: "მინი ცილინდრული ბიოკამინი მაგიდებისა და აივნებისთვის.",
    descEn: "Mini cylindrical biofireplace for balconies and dining tables."
  },
  {
    id: "002.03.034.00",
    ean: "5902730356141",
    category: "freestanding",
    nameGe: "ბიოკამინი Moon Mini – თეთრი",
    nameEn: "Biofireplace Moon Mini – White",
    dimensions: "23 × 29 სმ",
    weight: "6.4 კგ",
    colors: ["#ffffff"],
    colorNamesGe: ["თეთრი"],
    colorNamesEn: ["White"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_moon.jpg",
    descGe: "მინი თეთრი ცილინდრული ბიოკამინი.",
    descEn: "Mini white cylindrical biofireplace."
  },
  {
    id: "002.01.005.01",
    ean: "5905279687301",
    category: "freestanding",
    nameGe: "ბიოკამინი Home – შავი",
    nameEn: "Biofireplace Home – Black",
    dimensions: "36 × 18 × 22 სმ",
    weight: "3.45 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი"],
    colorNamesEn: ["Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/hero.jpg",
    descGe: "მინის დამცავი ფარით აღჭურვილი კომპაქტური ბიოკამინი.",
    descEn: "Compact glass-shielded freestanding biofireplace."
  },
  {
    id: "002.02.008.00",
    ean: "5905279687257",
    category: "freestanding",
    nameGe: "ბიოკამინი Stainless – შავი",
    nameEn: "Biofireplace Stainless – Black",
    dimensions: "36 × 6 × 15 სმ",
    weight: "1.4 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი"],
    colorNamesEn: ["Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_stainless.jpg",
    descGe: "უჟანგავი ფოლადის ცილინდრული სანთურა სადგამზე.",
    descEn: "Stainless steel cylinder burner on sleek base."
  },
  {
    id: "002.05.011.00",
    ean: "5905279687844",
    category: "freestanding",
    nameGe: "ბიოკამინი Stainless – Inox",
    nameEn: "Biofireplace Stainless – Inox",
    dimensions: "36 × 6 × 15 სმ",
    weight: "1.4 კგ",
    colors: ["#c0c0c0"],
    colorNamesGe: ["Inox (ვერცხლისფერი)"],
    colorNamesEn: ["Inox Silver"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_stainless.jpg",
    descGe: "ვერცხლისფერი უჟანგავი ფოლადის ბიოკამინი.",
    descEn: "Silver inox stainless biofireplace."
  },
  {
    id: "002.01.019.00",
    ean: "5902730353904",
    category: "freestanding",
    nameGe: "ბიოკამინი Kozen – შავი",
    nameEn: "Biofireplace Kozen – Black Column",
    dimensions: "44 × 136 × 31 სმ",
    weight: "13.5 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი"],
    colorNamesEn: ["Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/hero.jpg",
    descGe: "ტრადიციული ღუმელის სტილის მაღალი იატაკის ბიოკამინი.",
    descEn: "Traditional stove style tall floor-standing biofireplace."
  },
  {
    id: "002.01.049.01",
    ean: "5902730356769",
    category: "garden",
    nameGe: "ბიოკამინი Pyramid Garden – შავი",
    nameEn: "Biofireplace Pyramid Garden – Black",
    dimensions: "115 × 30 სმ",
    weight: "16.2 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი"],
    colorNamesEn: ["Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_pyramid.jpg",
    descGe: "პირამიდის ფორმის მაღალი გარე ბიოკამინი შეშის სათავსოთი.",
    descEn: "Pyramid-shaped tall garden biofireplace with lower log store."
  },

  // --- INTERIOR & WALL-MOUNTED (ინტერიერი და კედლის) ---
  {
    id: "001.01.028.01",
    ean: "5902730351696",
    category: "interior",
    nameGe: "ბიოკამინი 650x400 Slim – შავი შუშით",
    nameEn: "Biofireplace Wall 650x400 Slim Black with Glass",
    dimensions: "65 × 40 × 12 სმ",
    weight: "6 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი მქრქალი"],
    colorNamesEn: ["Black Matte"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/hero.jpg",
    descGe: "კედელზე დასაკიდი თხელი კომპაქტური ბიოკამინი დამცავი მინით.",
    descEn: "Wall-mounted slim biofireplace with protective glass front."
  },
  {
    id: "001.01.014.01",
    ean: "5902730351627",
    category: "interior",
    nameGe: "ბიოკამინი 900x400 Slim – შავი შუშით",
    nameEn: "Biofireplace Wall 900x400 Slim Black with Glass",
    dimensions: "90 × 40 × 12 სმ",
    weight: "9 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი მქრქალი"],
    colorNamesEn: ["Black Matte"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/hero.jpg",
    descGe: "ფართო 90 სმ კედლის ბიოკამინი მისაღები ოთახისა და ოფისისთვის.",
    descEn: "Wide 90cm wall-mounted biofireplace for living rooms & executive offices."
  },
  {
    id: "001.01.036.01",
    ean: "5902730350088",
    category: "interior",
    nameGe: "ბიოკამინი 1200x400 – შავი შუშით",
    nameEn: "Biofireplace Wall 1200x400 Black with Glass",
    dimensions: "120 × 40 × 12 სმ",
    weight: "15 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი მქრქალი"],
    colorNamesEn: ["Black Matte"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/hero.jpg",
    descGe: "გრანდიოზული 120 სმ სიგანის კედლის პანორამული ბიოკამინი.",
    descEn: "Grand 120cm wide panoramic wall-mounted biofireplace."
  },
  {
    id: "001.01.040.00",
    ean: "5902730353973",
    category: "interior",
    nameGe: "ბიოკამინი Vertical – შავი",
    nameEn: "Biofireplace Vertical – Black",
    dimensions: "61 × 39 × 12 სმ",
    weight: "8.6 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი მქრქალი"],
    colorNamesEn: ["Black Matte"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/hero.jpg",
    descGe: "ვერტიკალური ფორმატის კედლის ბიოკამინი.",
    descEn: "Vertical format wall-mounted biofireplace."
  },

  // --- PORTAL (პორტალური ბუხრები) ---
  {
    id: "003.03.002.01",
    ean: "5902730351504",
    category: "portal",
    nameGe: "ბიოკამინი Koloseum Pula",
    nameEn: "Portal Biofireplace Koloseum Pula",
    dimensions: "113 × 100 × 30 სმ",
    weight: "50 კგ",
    colors: ["#ffffff"],
    colorNamesGe: ["თეთრი"],
    colorNamesEn: ["White"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/hero.jpg",
    descGe: "კლასიკური პორტალური ბუხარი თეთრი ჩარჩოთი და შუშის ფარით.",
    descEn: "Classic portal biofireplace with white mantel and glass."
  },
  {
    id: "003.03.004.01",
    ean: "5902730351511",
    category: "portal",
    nameGe: "ბიოკამინი Koloseum Werona",
    nameEn: "Portal Biofireplace Koloseum Werona",
    dimensions: "113 × 100 × 30 სმ",
    weight: "50 კგ",
    colors: ["#ffffff"],
    colorNamesGe: ["თეთრი"],
    colorNamesEn: ["White"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/hero.jpg",
    descGe: "ელიტარული ვერონას სტილის პორტალური ბუხარი.",
    descEn: "Elite Verona-style portal mantel biofireplace."
  },
  {
    id: "003.12.011.00",
    ean: "5902730353966",
    category: "portal",
    nameGe: "ბიოკამინი Concrete Loft",
    nameEn: "Portal Biofireplace Concrete Loft",
    dimensions: "95.4 × 84.2 × 16 სმ",
    weight: "43 კგ",
    colors: ["#a0a0a0"],
    colorNamesGe: ["ბეტონის ეფექტი"],
    colorNamesEn: ["Concrete Gray"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/hero.jpg",
    descGe: "თანამედროვე ლოფტის სტილის ბეტონის ფაქტურის პორტალის ბუხარი.",
    descEn: "Modern loft style concrete textured portal fireplace."
  },

  // --- BUILT-IN INSERTS (ჩაშენებული კამერები) ---
  {
    id: "004.01.001.01",
    ean: "5902730351740",
    category: "built-in",
    nameGe: "Bio-Eko კუთხის ჩამსმელი (მარცხენა)",
    nameEn: "Bio-Eko Corner Insert (Left)",
    dimensions: "80 × 50 × 30 სმ",
    weight: "27 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი"],
    colorNamesEn: ["Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/hero.jpg",
    descGe: "ორმხრივი კუთხის ჩაშენებული წვის კამერა (მარცხენა მხარე).",
    descEn: "Two-sided built-in corner insert (left-open)."
  },
  {
    id: "004.01.002.01",
    ean: "5902730351528",
    category: "built-in",
    nameGe: "Bio-Eko კუთხის ჩამსმელი (მარჯვენა)",
    nameEn: "Bio-Eko Corner Insert (Right)",
    dimensions: "80 × 50 × 30 სმ",
    weight: "27 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი"],
    colorNamesEn: ["Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/hero.jpg",
    descGe: "ორმხრივი კუთხის ჩაშენებული წვის კამერა (მარჯვენა მხარე).",
    descEn: "Two-sided built-in corner insert (right-open)."
  },
  {
    id: "004.01.004.00",
    ean: "5902730352310",
    category: "built-in",
    nameGe: "წვის ხაზოვანი სანთურა 900",
    nameEn: "Built-in Linear Burner 900",
    dimensions: "90 × 11 × 5.3 სმ",
    weight: "4.2 კგ",
    colors: ["#c0c0c0"],
    colorNamesGe: ["ფოლადი / შავი"],
    colorNamesEn: ["Steel / Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/hero.jpg",
    descGe: "90 სმ სიგრძის ხაზოვანი წვის სანთურა ინდივიდუალური ჩაშენებისთვის.",
    descEn: "90cm linear burner for custom architectural build-ins."
  },
  {
    id: "004.01.005.00",
    ean: "5902730353935",
    category: "built-in",
    nameGe: "ჩასაშენებელი სანთურა DIY 36",
    nameEn: "Built-in Insert DIY 36",
    dimensions: "36 × 18 × 22 სმ",
    weight: "3.4 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი"],
    colorNamesEn: ["Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/hero.jpg",
    descGe: "კომპაქტური ჩასაშენებელი კამერა ავეჯსა და კედლებში ინსტალაციისთვის.",
    descEn: "Compact built-in insert for furniture and wall recesses."
  },

  // --- ACCESSORIES & BIOFUEL (აქსესუარები და საწვავი) ---
  {
    id: "007.00.005.00",
    ean: "5905279687189",
    category: "accessories",
    nameGe: "კერამიკული შეშა Brzoza (4 ცალი)",
    nameEn: "Ceramic Birch Logs (4 pcs)",
    dimensions: "30 × 24 × 8.5 სმ",
    weight: "0.66 კგ",
    colors: ["#e0d5c1"],
    colorNamesGe: ["არყის ხის იმიტაცია"],
    colorNamesEn: ["Birch Wood"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/accessories.jpg",
    descGe: "ცეცხლგამძლე კერამიკული შეშის კომპლექტი ნამდვილი ხის ეფექტისთვის.",
    descEn: "Refractory ceramic log set simulating real birch wood."
  },
  {
    id: "007.00.008.00",
    ean: "5905279687165",
    category: "accessories",
    nameGe: "დეკორატიული თეთრი კენჭები (1 კგ)",
    nameEn: "Decorative White Stones (1 kg)",
    dimensions: "10 × 10 × 10 სმ",
    weight: "1.0 კგ",
    colors: ["#ffffff"],
    colorNamesGe: ["თეთრი"],
    colorNamesEn: ["White"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/accessories.jpg",
    descGe: "სპეციალური თერმომდგრადი თეთრი ქვები ბიოკამინის გასაფორმებლად.",
    descEn: "Heat-resistant white decorative stones for biofireplaces."
  },
  {
    id: "007.01.014.00",
    ean: "5902730355113",
    category: "accessories",
    nameGe: "გრძელი სანთებელა 31 სმ",
    nameEn: "Biofireplace Lighter 31 cm",
    dimensions: "31 სმ",
    weight: "0.04 კგ",
    colors: ["#1a1a1a"],
    colorNamesGe: ["შავი"],
    colorNamesEn: ["Black"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/accessories.jpg",
    descGe: "უსაფრთხო წვდომის გრძელი სანთებელა ბიოკამინის ასანთებად.",
    descEn: "Safe long-reach lighter for biofireplaces."
  },
  {
    id: "008.00.001.00",
    ean: "5905279687042",
    category: "biofuel",
    nameGe: "ეკო ბიოსაწვავი GMT 1L – ნეიტრალური",
    nameEn: "Biofuel GMT 1L – Neutral",
    dimensions: "8.5 × 8.5 × 23.5 სმ",
    weight: "0.85 კგ",
    colors: ["#00a8ff"],
    colorNamesGe: ["ნეიტრალური"],
    colorNamesEn: ["Neutral"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_fuel.jpg",
    descGe: "100% ეკოლოგიური მცენარეული ბიოეთანოლი. 0 კვამლი, 0 სუნი.",
    descEn: "100% eco-friendly plant bioethanol. 0 smoke, neutral scent."
  },
  {
    id: "008.00.003.00",
    ean: "5905279687066",
    category: "biofuel",
    nameGe: "ეკო ბიოსაწვავი GMT 5L – ნეიტრალური",
    nameEn: "Biofuel GMT 5L – Neutral",
    dimensions: "19 × 12 × 28 სმ",
    weight: "4.2 კგ",
    colors: ["#00a8ff"],
    colorNamesGe: ["ნეიტრალური 5L"],
    colorNamesEn: ["Neutral 5L"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_fuel.jpg",
    descGe: "5 ლიტრიანი ეკონომიური შეფუთვა ხანგრძლივი წვისთვის.",
    descEn: "5-liter economical canister for extended burn time."
  },
  {
    id: "008.06.009.00",
    ean: "5905279687127",
    category: "biofuel",
    nameGe: "არომატული ბიოსაწვავი 1L – არომატული ესპრესო",
    nameEn: "Aromatic Biofuel 1L – Espresso",
    dimensions: "8.5 × 8.5 × 23.5 სმ",
    weight: "0.85 კგ",
    colors: ["#5c3d2e"],
    colorNamesGe: ["ყავა ესპრესო"],
    colorNamesEn: ["Espresso Coffee"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_fuel.jpg",
    descGe: "ბიოსაწვავი ნამდვილი ყავის სასიამოვნო არომატით.",
    descEn: "Aromatic bioethanol releasing rich roasted espresso scent."
  },
  {
    id: "008.04.007.00",
    ean: "5905279687103",
    category: "biofuel",
    nameGe: "არომატული ბიოსაწვავი 1L – ლავანდის ველები",
    nameEn: "Aromatic Biofuel 1L – Lavender Fields",
    dimensions: "8.5 × 8.5 × 23.5 სმ",
    weight: "0.85 კგ",
    colors: ["#9b59b6"],
    colorNamesGe: ["ლავანდა"],
    colorNamesEn: ["Lavender"],
    priceGel: null,
    priceEur: null,
    pricePln: null,
    image: "assets/product_fuel.jpg",
    descGe: "ბიოსაწვავი დამამშვიდებელი ლავანდის არომატით.",
    descEn: "Aromatic bioethanol with soothing French lavender scent."
  }
];

// --- CLOUD STORAGE STATE MANAGER ---
const CloudStorageManager = {
  // In-memory cache of prices: { "002.01.001.01": { gel: 890, eur: 310, pln: 1350 }, ... }
  priceMap: {},

  // Initialize and load live prices from Cloud Storage (with localStorage fast cache)
  async init() {
    this.loadLocalCache();
    await this.syncFromCloud();
  },

  loadLocalCache() {
    try {
      const cached = localStorage.getItem(CLOUD_CONFIG.storageKey);
      if (cached) {
        this.priceMap = JSON.parse(cached);
        this.applyPricesToProducts();
      }
    } catch (e) {
      console.warn("Local price cache read error:", e);
    }
  },

  async syncFromCloud() {
    try {
      const response = await fetch(CLOUD_CONFIG.endpoint, {
        method: "GET",
        headers: {
          "X-Master-Key": CLOUD_CONFIG.apiKey
        }
      });
      if (response.ok) {
        const data = await response.json();
        const cloudData = data.record || data;
        if (cloudData && typeof cloudData === "object") {
          this.priceMap = cloudData;
          localStorage.setItem(CLOUD_CONFIG.storageKey, JSON.stringify(this.priceMap));
          this.applyPricesToProducts();
          window.dispatchEvent(new CustomEvent("gmt:prices-updated"));
          return true;
        }
      }
    } catch (e) {
      console.info("Cloud storage unreachable, using current/local state.", e);
    }
    return false;
  },

  async savePricesToCloud(newPriceMap) {
    this.priceMap = { ...this.priceMap, ...newPriceMap };
    localStorage.setItem(CLOUD_CONFIG.storageKey, JSON.stringify(this.priceMap));
    this.applyPricesToProducts();

    // Push to Cloud
    try {
      const response = await fetch(CLOUD_CONFIG.endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": CLOUD_CONFIG.apiKey
        },
        body: JSON.stringify(this.priceMap)
      });
      if (response.ok) {
        window.dispatchEvent(new CustomEvent("gmt:prices-updated"));
        return { success: true, message: "ღრუბელში წარმატებით შენახულია!" };
      }
    } catch (e) {
      console.error("Cloud save failed:", e);
    }
    // Saved locally if cloud request failed
    window.dispatchEvent(new CustomEvent("gmt:prices-updated"));
    return { success: true, message: "შენახულია ლოკალურად (ღრუბელთან კავშირის აღდგენისას დაასინქრონებს)." };
  },

  applyPricesToProducts() {
    PRODUCTS.forEach(product => {
      const stored = this.priceMap[product.id];
      if (stored) {
        if (stored.gel !== undefined && stored.gel !== null && stored.gel !== "") product.priceGel = Number(stored.gel);
        if (stored.eur !== undefined && stored.eur !== null && stored.eur !== "") product.priceEur = Number(stored.eur);
        if (stored.pln !== undefined && stored.pln !== null && stored.pln !== "") product.pricePln = Number(stored.pln);
      }
    });
  },

  getPriceForCurrency(product, currency = "GEL") {
    const cur = (currency || "GEL").toUpperCase();
    if (cur === "GEL" && product.priceGel) return { amount: product.priceGel, symbol: "₾", code: "GEL" };
    if (cur === "EUR" && product.priceEur) return { amount: product.priceEur, symbol: "€", code: "EUR" };
    if (cur === "PLN" && product.pricePln) return { amount: product.pricePln, symbol: "zł", code: "PLN" };
    
    // Auto convert if only one currency set
    if (product.priceGel) {
      if (cur === "EUR") return { amount: Math.round(product.priceGel / 2.95), symbol: "€", code: "EUR" };
      if (cur === "PLN") return { amount: Math.round(product.priceGel * 1.45), symbol: "zł", code: "PLN" };
      return { amount: product.priceGel, symbol: "₾", code: "GEL" };
    }
    if (product.priceEur) {
      if (cur === "GEL") return { amount: Math.round(product.priceEur * 2.95), symbol: "₾", code: "GEL" };
      if (cur === "PLN") return { amount: Math.round(product.priceEur * 4.3), symbol: "zł", code: "PLN" };
      return { amount: product.priceEur, symbol: "€", code: "EUR" };
    }
    if (product.pricePln) {
      if (cur === "GEL") return { amount: Math.round(product.pricePln / 1.45), symbol: "₾", code: "GEL" };
      if (cur === "EUR") return { amount: Math.round(product.pricePln / 4.3), symbol: "€", code: "EUR" };
      return { amount: product.pricePln, symbol: "zł", code: "PLN" };
    }

    return null; // Empty price!
  }
};

// Initialize Cloud Manager
CloudStorageManager.init();
