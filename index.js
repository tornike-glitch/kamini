// GMT Bio-fireplaces Application Logic

// Language Translation Dictionaries
const TRANSLATIONS = {
  en: {
    "nav-home": "Home",
    "nav-about": "How it works",
    "nav-catalog": "Catalog",
    "nav-faq": "FAQ",
    "nav-inquiry": "Inquiry List",
    "nav-contact": "Contact",
    "hero-badge": "Designed & Made in Poland, EU",
    "trust-certified": "CE Certified",
    "trust-apartment": "Apartment Safe",
    "trust-smokeless": "0 Smoke, 0 Soot",
    "trust-instant": "Ignite in 1s",
    "stat1-num": "167+",
    "stat1-label": "Models in Catalog",
    "stat2-num": "10+",
    "stat2-label": "Years of Experience",
    "stat3-num": "100%",
    "stat3-label": "Made in Poland",
    "stat4-num": "EU",
    "stat4-label": "CE Certified",
    "feature-banner-title": "Home or Garden — Biofireplace Everywhere!",
    "feature-banner-desc": "Our products can be used in apartments, homes, or outdoor terraces. No additional installation required — setup in 15 minutes!",
    "feature-banner-cta": "View Catalog",
    "feature-icon1": "Apartment",
    "feature-icon2": "House",
    "feature-icon3": "Terrace",
    "feature-icon4": "Office",
    "faq-title": "Frequently Asked Questions",
    "faq-subtitle": "Answers to the most common questions about bio-fireplaces",
    "faq-q1": "Does a bio-fireplace heat the room?",
    "faq-a1": "Yes! The bio-fireplace is an additional heat source for the room. It can raise the room temperature by up to 3 degrees Celsius. Bioethanol combustion produces real heat, just like a traditional fireplace.",
    "faq-q2": "Can I use a bio-fireplace in an apartment?",
    "faq-a2": "Absolutely! One of the main advantages of GMT bio-fireplaces is exactly this. They do not require a chimney, exhaust, or any other installations. Our CE-certified products are fully safe for use in apartments.",
    "faq-q3": "What fuel does a bio-fireplace need?",
    "faq-a3": "Bio-fireplaces run on bioethanol — a renewable fuel derived from plants. We offer our own brand of neutral-scent bioethanol that guarantees clean, efficient combustion.",
    "faq-q4": "Does a bio-fireplace produce smoke or odor?",
    "faq-a4": "No! Bioethanol combustion produces only water vapor and a small amount of CO2, similar to what a human exhales. No smoke, soot, or ash is produced. Our neutral bioethanol is odorless.",
    "faq-q5": "How is a bio-fireplace installed?",
    "faq-a5": "Installation is very simple! Wall-mounted models only need to be hung on the wall, while freestanding bio-fireplaces require no installation at all. The entire process takes 15-30 minutes. Each product comes with detailed instructions.",
    "faq-q6": "How long does one fill last?",
    "faq-a6": "It depends on the burner volume. A standard 1.5-liter chamber runs for 3-5 hours. Larger chambers last 6-8 hours or more. Our 10-liter fuel kit provides 20-40 hours of enjoyment.",
    "faq-q7": "Is a bio-fireplace safe for children?",
    "faq-a7": "A bio-fireplace, like any open flame source, requires adult supervision. All our products are fully safe when used in a properly ventilated room. We advise that children should not touch an operating bio-fireplace.",
    "faq-q8": "Can I use a bio-fireplace in the garden or on a terrace?",
    "faq-a8": "Yes! We have a special garden series — bio-fireplaces designed for outdoor terraces and gardens. They are built for outdoor use and can withstand wind and humidity. A garden bio-fireplace creates an amazing atmosphere in any outdoor space.",
    "faq-q9": "How do I extinguish a bio-fireplace?",
    "faq-a9": "Every bio-fireplace comes with a special extinguishing tool. Using it cuts off oxygen supply and the fire goes out in 1-2 seconds. Never extinguish a bio-fireplace with water!",
    "faq-q10": "What room size is a bio-fireplace suitable for?",
    "faq-a10": "A bio-fireplace can be used in any room with at least 25 sqm floor area. For better efficiency in rooms of 40+ sqm, we recommend models with larger burner chambers. Proper ventilation is required in all cases.",
    "hero-desc": "Eco-friendly, odorless, and smokeless bio-fireplaces. No chimney required. Safe to use in apartments and gardens.",
    "hero-cta-explore": "Explore Collection",
    "hero-cta-how": "How it Works",
    "about-title": "How GMT Bio-fireplaces Work",
    "about-subtitle": "Advanced, clean combustion technology bringing the ultimate fireplace atmosphere to any space.",
    "benefit1-title": "Eco Biofuel",
    "benefit1-desc": "Pour clean, plant-based bioethanol fuel into the safety burner cup.",
    "benefit2-title": "Ignite in 1s",
    "benefit2-desc": "Instantly light the biofuel with a safety lighter. Safe and rapid fireplace activation.",
    "benefit3-title": "Odorless & Smokeless",
    "benefit3-desc": "Combustion produces only water vapor and tiny amounts of CO2. No soot, smoke, or ashes.",
    "benefit4-title": "Cozy Warmth",
    "benefit4-desc": "Provides substantial thermal energy, warming your living room or outdoor patio.",
    "benefit5-title": "Safe Extinguishing",
    "benefit5-desc": "Shut off oxygen supply using the extinguishing tool to stop the fire instantly.",
    "benefit6-title": "Apartment Safe",
    "benefit6-desc": "No chimney or flue needed. Fully certified for safe indoor apartment operation.",
    "catalog-title": "GMT Bio-fireplace Catalog",
    "catalog-subtitle": "Select a category and browse our collections. Click on products to inspect technical parameters.",
    "search-placeholder": "Search fireplaces...",
    "tab-all": "All",
    "tab-garden": "Garden",
    "tab-interior": "Interiors",
    "tab-accessories": "Accessories",
    "tab-biofuel": "Biofuels",
    "inquiry-title": "Your Inquiry List",
    "inquiry-subtitle": "Review selected products and modify quantities to request a customized quote.",
    "inquiry-empty-text": "Your inquiry list is empty. Add products from the catalog above to build your request.",
    "summary-total": "Total Price (Suggested Retail):",
    "form-title": "Request Custom Offer",
    "form-name-label": "Name / Company",
    "form-email-label": "Email Address",
    "form-phone-label": "Phone Number",
    "form-notes-label": "Additional Message / Inquiries",
    "form-disclosure": "* Note: Submitting this inquiry drafts an official request that will be formatted and shared with GMT sales. Wholesale orders receive up to 40% discount!",
    "form-submit": "Submit Inquiry",
    "contact-info-title": "Contact GMT",
    "contact-info-desc": "Get in touch with us for purchasing, distributions, and dropshipping details in Georgia and the EU.",
    "contact-manufacturer": "Manufacturer HQ",
    "contact-email": "Email Inquiries",
    "contact-phone": "Phone Support",
    "partnership-title": "Wholesale & Dropshipping",
    "partnership-text": "We offer direct shipment options, premium marketing materials, and high margins for retailers in Georgia. Get a wholesale discount of up to 40% on your first order.",
    "partnership-badge": "40% First Order Discount",
    
    // UI specific
    "details": "Details",
    "add-btn": "Add",
    "add-to-inquiry": "Add to Inquiry",
    "categories-title": "Explore Our Categories",
    "categories-subtitle": "Select a category to browse specifically tailored bio-fireplaces for your space",
    "cat-interior-title": "Interior Fireplaces",
    "cat-interior-desc": "Premium wall-mounted and corner bio-fireplaces for living rooms and apartments",
    "cat-garden-title": "Garden & Terrace",
    "cat-garden-desc": "Weatherproof outdoor fireplaces to warm your patio and garden gatherings",
    "cat-accessories-title": "Accessories",
    "cat-accessories-desc": "Special accessories for the perfect operation of your bio-fireplace",
    "cat-biofuel-title": "Eco Biofuel",
    "cat-biofuel-desc": "Eco-friendly, neutral-scent plant-based bioethanol fuel",
    "dimensions": "Dimensions",
    "color": "Color",
    "sku": "Product SKU",
    "ean": "EAN Code",
    "added": "Added",
    "in-inquiry": "In Inquiry List",
    
    // Modals
    "close": "Close",
    "success-title": "Inquiry Draft Generated!",
    "success-close": "Close",
    
    // Alerts
    "item-added-alert": "Added to your inquiry list!",
    "inquiry-empty-alert": "Please add some items to your list before submitting.",
    "inquiry-success-text": "Copy the draft details below to send via email to GMT support:"
  },
  ge: {
    "nav-home": "მთავარი",
    "nav-about": "როგორ მუშაობს",
    "nav-catalog": "კატალოგი",
    "nav-faq": "კითხვები",
    "nav-inquiry": "შეკვეთის სია",
    "nav-contact": "კონტაქტი",
    "hero-badge": "დაპროექტებულია და დამზადებულია პოლონეთში, ევროკავშირი",
    "trust-certified": "CE სერტიფიკატი",
    "trust-apartment": "ბინაში გამოყენება",
    "trust-smokeless": "0 კვამლი, 0 ჭვარტლი",
    "trust-instant": "ანთება 1 წამში",
    "stat1-num": "167+",
    "stat1-label": "მოდელი კატალოგში",
    "stat2-num": "10+",
    "stat2-label": "წლიანი გამოცდილება",
    "stat3-num": "100%",
    "stat3-label": "პოლონეთში დამზადებული",
    "stat4-num": "EU",
    "stat4-label": "CE სერტიფიცირებული",
    "feature-banner-title": "სახლი ან ბაღი — ბიოკამინი ყველგან!",
    "feature-banner-desc": "ჩვენი პროდუქტები შეგიძლიათ გამოიყენოთ ბინაში, სახლში ან გარე ტერასაზე. არ საჭიროებს დამატებით ინსტალაციას — მონტაჟი 15 წუთში!",
    "feature-banner-cta": "კატალოგის ნახვა",
    "feature-icon1": "ბინა",
    "feature-icon2": "სახლი",
    "feature-icon3": "ტერასა",
    "feature-icon4": "ოფისი",
    "faq-title": "ხშირად დასმული კითხვები",
    "faq-subtitle": "პასუხები ბიოკამინების შესახებ ყველაზე გავრცელებულ კითხვებზე",
    "faq-q1": "გათბობს თუ არა ბიოკამინი ოთახს?",
    "faq-a1": "დიახ! ბიოკამინი არის ოთახის სითბოს დამატებითი წყარო. ის შეძლებს ოთახის ტემპერატურის 3 გრადუს ცელსიუსით ამაღლებას. ბიოეთანოლის წვა რეალურ სითბოს გამოყოფს, ისევე როგორც ტრადიციული ბუხარი.",
    "faq-q2": "შეიძლება ბიოკამინის გამოყენება ბინაში?",
    "faq-a2": "აბსოლუტურად! GMT ბიოკამინების ერთ-ერთი მთავარი უპირატესობა სწორედ ეს არის. ისინი არ საჭიროებენ საკვამურს, გამწოვს ან სხვა ინსტალაციებს. CE სერტიფიკაციის მქონე ჩვენი პროდუქტები სრულად უსაფრთხოა ბინებში გამოსაყენებლად.",
    "faq-q3": "რა საწვავი სჭირდება ბიოკამინს?",
    "faq-a3": "ბიოკამინი მუშაობს ბიოეთანოლზე — მცენარეებისგან მიღებულ განახლებად საწვავზე. ჩვენ გთავაზობთ ჩვენი ბრენდის ნეიტრალური სუნის ბიოსაწვავს, რომელიც გარანტირებს სუფთა, ეფექტიან წვას.",
    "faq-q4": "გამოყოფს ბიოკამინი კვამლს ან სუნს?",
    "faq-a4": "არა! ბიოეთანოლის წვისას გამოიყოფა მხოლოდ წყლის ორთქლი და მცირე რაოდენობის CO2, ისეთივე, რომელსაც ადამიანი სუნთქვისას გამოყოფს. კვამლი, ჭვარტლი ან ნაცარი არ გამოიყოფა. ჩვენი ნეიტრალური ბიოსაწვავი სუნის გარეშეა.",
    "faq-q5": "როგორ ხდება ბიოკამინის მონტაჟი?",
    "faq-a5": "მონტაჟი ძალიან მარტივია! ჩამოკიდებული მოდელებისთვის საჭიროა მხოლოდ კედელზე ჩამოკიდება, ხოლო თავისუფლად მდგომი ბიოკამინები საერთოდ არ საჭიროებენ მონტაჟს. მთლიანი პროცესი 15-30 წუთს იკავებს. ყოველ პროდუქტს ახლავს დეტალური ინსტრუქცია.",
    "faq-q6": "რამდენ ხანს მუშაობს ერთი შევსება?",
    "faq-a6": "დამოკიდებულია წვის კამერის მოცულობაზე. სტანდარტული 1,5 ლიტრიანი კამერა 3-5 საათს მუშაობს. დიდი კამერები 6-8 საათს ან მეტს. ჩვენი 10 ლიტრიანი საწვავის კომპლექტი 20-40 საათის სიამოვნებას გთავაზობთ.",
    "faq-q7": "უსაფრთხოა თუ არა ბიოკამინი ბავშვებისთვის?",
    "faq-a7": "ბიოკამინი, ისევე როგორც ნებისმიერი ღია ცეცხლის წყარო, საჭიროებს ზრდასრულის მეთვალყურეობას. ჩვენი ყველა პროდუქტი გამოსაყენებელ ოთახში სათანადო ვენტილაციის შემთხვევაში სრულად უსაფრთხოა. ჩვენ გირჩევთ ბავშვებმა არ შეეხონ ჩართულ ბიოკამინს.",
    "faq-q8": "შეიძლება ბიოკამინი ბაღში ან ტერასაზე?",
    "faq-a8": "დიახ! ჩვენ გვაქვს სპეციალური ბაღის სერია — გარე ტერასებისა და ბაღებისთვის განსაზღვრული ბიოკამინები. ისინი შექმნილია გარე გამოყენებისთვის და შეუძლიათ ქარისა და ნესტისგან გაუძლოს. ბაღის ბიოკამინი საოცარ ატმოსფეროს შექმნის ნებისმიერ გარე სივრცეში.",
    "faq-q9": "როგორ ვჩაქრო ბიოკამინი?",
    "faq-a9": "ყოველ ბიოკამინს ახლავს სპეციალური ჩამქრობი ხელსაწყო. მისი გამოყენებით ჟანგბადის მიწოდება წყდება და ცეცხლი 1-2 წამში ქრება. არასოდეს ჩაქრათ ბიოკამინი წყლით!",
    "faq-q10": "რა ზომის ოთახისთვის არის შესაფერისი ბიოკამინი?",
    "faq-a10": "ბიოკამინი შეიძლება გამოვიყენოთ ნებისმიერი ზომის ოთახში, მინიმუმ 25 კვ.მ. ფართობის პირობით. მეტ ეფექტურობაზე 40+ კვ.მ. ოთახებისთვის გირჩევთ უფრო დიდი კამერის მქონე მოდელებს. ნებისმიერ შემთხვევაში საჭიროა სათანადო ვენტილაცია.",
    "hero-desc": "ეკოლოგიურად სუფთა, უსუნო და უკვამლო ბიოკამინები. არ საჭიროებს საკვამურს. უსაფრთხოა ბინებისა და ბაღებისთვის.",
    "hero-cta-explore": "კოლექციის ნახვა",
    "hero-cta-how": "როგორ მუშაობს",
    "about-title": "როგორ მუშაობს GMT ბიოკამინი",
    "about-subtitle": "წვის მოწინავე, სუფთა ტექნოლოგია, რომელსაც ნამდვილი ბუხრის ატმოსფერო შემოაქვს ნებისმიერ სივრცეში.",
    "benefit1-title": "ეკო ბიოსაწვავი",
    "benefit1-desc": "ჩაასხით მცენარეული ბიოეთანოლის სუფთა საწვავი უსაფრთხო წვის კამერაში.",
    "benefit2-title": "ანთება 1 წამში",
    "benefit2-desc": "მყისიერად აანთეთ ბიოსაწვავი სპეციალური გრძელი სანთებელათი. მარტივი და უსაფრთხოა.",
    "benefit3-title": "უსუნო & უკვამლო",
    "benefit3-desc": "წვის შედეგად გამოიყოფა მხოლოდ წყლის ორთქლი და მცირე CO2. ჭვარტლისა და ნაცრის გარეშე.",
    "benefit4-title": "მყუდრო სითბო",
    "benefit4-desc": "გამოყოფს მნიშვნელოვან თბოენერგიას, ათბობს თქვენს მისაღებ ოთახს ან გარე ტერასას.",
    "benefit5-title": "უსაფრთხო ჩაქრობა",
    "benefit5-desc": "სპეციალური ჩამქრობი ხელსაწყოთი გადააფარეთ წვის კამერას და ჩააქრეთ ცეცხლი 1 წამში.",
    "benefit6-title": "უსაფრთხოა ბინისთვის",
    "benefit6-desc": "არ საჭიროებს გამწოვს. სრულად სერტიფიცირებულია ბინებსა და დახურულ სივრცეებში გამოსაყენებლად.",
    "catalog-title": "GMT ბიოკამინების კატალოგი",
    "catalog-subtitle": "აირჩიეთ კატეგორია და დაათვალიერეთ ჩვენი პროდუქცია. დააჭირეთ პროდუქტს მახასიათებლების სანახავად.",
    "search-placeholder": "მოძებნეთ ბიოკამინები...",
    "tab-all": "ყველა",
    "tab-garden": "ბაღის / გარე",
    "tab-interior": "ინტერიერის",
    "tab-accessories": "აქსესუარები",
    "tab-biofuel": "ბიოსაწვავი",
    "inquiry-title": "თქვენი შეკვეთის სია",
    "inquiry-subtitle": "გადახედეთ არჩეულ პროდუქტებს, შეცვალეთ რაოდენობა და მოითხოვეთ პერსონალური შემოთავაზება.",
    "inquiry-empty-text": "თქვენი სია ცარიელია. დაამატეთ პროდუქტები ზემოთ მოცემული კატალოგიდან შეკვეთის შესადგენად.",
    "summary-total": "ჯამური ღირებულება (საცალო ფასი):",
    "form-title": "მოითხოვეთ ფასდაკლება",
    "form-name-label": "სახელი / კომპანია",
    "form-email-label": "ელ-ფოსტა",
    "form-phone-label": "ტელეფონის ნომერი",
    "form-notes-label": "დამატებითი შეტყობინება / მოთხოვნები",
    "form-disclosure": "* შენიშვნა: მოთხოვნის გაგზავნით გენერირდება ოფიციალური შეკვეთის პროექტი, რომელიც გადაეგზავნება GMT-ის ოფისს. საბითუმო შეკვეთებზე მოქმედებს 40%-მდე ფასდაკლება!",
    "form-submit": "მოთხოვნის გაგზავნა",
    "contact-info-title": "დაუკავშირდით GMT-ს",
    "contact-info-desc": "დაგვიკავშირდით შესყიდვის, დისტრიბუციისა და საქართველოში პროდუქტის პარტნიორობის დეტალებისთვის.",
    "contact-manufacturer": "მწარმოებლის ოფისი",
    "contact-email": "ელ-ფოსტა",
    "contact-phone": "ტელეფონი",
    "partnership-title": "საბითუმო გაყიდვები & დროპშიპინგი",
    "partnership-text": "ჩვენ გთავაზობთ პირდაპირი მიწოდების ოპციებს, სარეკლამო მასალებსა და მაღალ მარჟებს საქართველოში მაღაზიებისთვის. მიიღეთ 40%-იანი საბითუმო ფასდაკლება თქვენს პირველ შეკვეთაზე.",
    "partnership-badge": "40% ფასდაკლება პირველ შეკვეთაზე",
    
    // UI specific
    "details": "დეტალურად",
    "add-btn": "დამატება",
    "add-to-inquiry": "სიაში დამატება",
    "categories-title": "დაათვალიერეთ კატეგორიები",
    "categories-subtitle": "შეარჩიეთ სასურველი მიმართულება და იპოვეთ თქვენი სივრცისთვის შესაფერისი ბიოკამინი",
    "cat-interior-title": "ინტერიერის ბიოკამინები",
    "cat-interior-desc": "კედლისა და კუთხის პრემიუმ მოდელები მისაღები ოთახებისა და ბინებისთვის",
    "cat-garden-title": "ბაღის და ტერასის",
    "cat-garden-desc": "ამინდის მიმართ მდგრადი გარე ბუხრები ტერასებისა და ეზოებისთვის",
    "cat-accessories-title": "აქსესუარები",
    "cat-accessories-desc": "სპეციალური აქსესუარები ბიოკამინების სრულყოფილი ექსპლუატაციისთვის",
    "cat-biofuel-title": "ეკო ბიოსაწვავი",
    "cat-biofuel-desc": "ეკოლოგიურად სუფთა, ნეიტრალური სუნის მცენარეული ბიოეთანოლი",
    "dimensions": "ზომები",
    "color": "ფერი",
    "sku": "პროდუქტის კოდი",
    "ean": "EAN კოდი",
    "added": "დამატებულია",
    "in-inquiry": "სიაშია",
    
    // Modals
    "close": "დახურვა",
    "success-title": "მოთხოვნის პროექტი შეიქმნა!",
    "success-close": "დახურვა",
    
    // Alerts
    "item-added-alert": "პროდუქტი დაემატა თქვენს სიაში!",
    "inquiry-empty-alert": "მოთხოვნის გასაგზავნად ჯერ დაამატეთ პროდუქტები სიაში.",
    "inquiry-success-text": "დააკოპირეთ შეკვეთის მონაცემები GMT-ის მხარდაჭერის ჯგუფისთვის გადასაგზავნად:"
  }
};

// Global App State
const state = {
  lang: "ge",
  currency: "GEL",
  rates: {
    PLN: 1.0,
    GEL: 0.65,
    EUR: 0.23
  },
  currencySymbols: {
    PLN: "zł",
    GEL: "₾",
    EUR: "€"
  },
  activeCategory: "all",
  searchQuery: "",
  inquiryList: [] // elements: { product, qty }
};

// Elements cache
const els = {
  langEn: document.getElementById("lang-en"),
  langGe: document.getElementById("lang-ge"),
  currencySelect: document.getElementById("currency-select"),
  searchInput: document.getElementById("search-input"),
  filterTabs: document.getElementById("filter-tabs"),
  productsGrid: document.getElementById("products-grid"),
  cartCount: document.getElementById("cart-count"),
  inquiryItemsContainer: document.getElementById("inquiry-items-container"),
  inquiryEmptyMsg: document.getElementById("inquiry-empty-msg"),
  inquirySummaryFooter: document.getElementById("inquiry-summary-footer"),
  summaryTotalPrice: document.getElementById("summary-total-price"),
  inquiryForm: document.getElementById("inquiry-form"),
  detailModal: document.getElementById("detail-modal"),
  successModal: document.getElementById("success-modal"),
  successBody: document.getElementById("success-body"),
  mobileToggle: document.getElementById("mobile-toggle"),
};

// Helper to fix corrupted UTF-8 bytes stored as Windows-1252 characters

function fixGe(str) {
  if (!str || !str.includes("áƒ")) return str;
  try {
    const charMap = {
      0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84, 0x2026: 0x85, 0x2020: 0x86,
      0x2021: 0x87, 0x02C6: 0x88, 0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C,
      0x017D: 0x8E, 0x2018: 0x91, 0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94, 0x2022: 0x95,
      0x2013: 0x96, 0x2014: 0x97, 0x02DC: 0x98, 0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B,
      0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F
    };
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (code <= 0xFF) {
        bytes.push(code);
      } else if (charMap[code] !== undefined) {
        bytes.push(charMap[code]);
      } else {
        bytes.push(63); // fallback '?'
      }
    }
    return new TextDecoder("utf-8").decode(new Uint8Array(bytes));
  } catch (e) {
    return str;
  }
}

function fixGeorgianEncoding() {
  if (typeof PRODUCTS !== 'undefined') {
    PRODUCTS.forEach(prod => {
      if (prod.nameGe) prod.nameGe = fixGe(prod.nameGe);
      if (prod.descGe) prod.descGe = fixGe(prod.descGe);
      if (prod.colorNamesGe) {
        prod.colorNamesGe = prod.colorNamesGe.map(name => fixGe(name));
      }
    });
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  fixGeorgianEncoding();
  
  // Parse URL category parameter
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get('category');
  if (categoryParam) {
    state.activeCategory = categoryParam;
  }
  
  loadInquiryFromStorage();
  updateUIStrings();

  // If a category was in the URL, make sure the correct tab is highlighted
  if (categoryParam && els.filterTabs) {
    els.filterTabs.querySelectorAll(".filter-tab").forEach(t => {
      if (t.dataset.filter === categoryParam) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });
  }

  renderProducts();
  renderInquiryList();
  setupCanvasBackground();
  setupEventListeners();
  setupFaqAccordion();
  setupHeroSlider();
  
  // Sticky Header Effect
  window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
});

// Setup Event Listeners
function setupEventListeners() {
  // Language Toggles
  if (els.langEn) els.langEn.addEventListener("click", () => switchLang("en"));
  if (els.langGe) els.langGe.addEventListener("click", () => switchLang("ge"));
  
  // Currency Toggle
  if (els.currencySelect) {
    els.currencySelect.addEventListener("change", (e) => {
      state.currency = e.target.value;
      renderProducts();
      renderInquiryList();
    });
  }
  
  // Search
  if (els.searchInput) {
    els.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }
  
  // Category Filter Tabs
  if (els.filterTabs) {
    els.filterTabs.addEventListener("click", (e) => {
      const tab = e.target.closest(".filter-tab");
      if (!tab) return;
      
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      state.activeCategory = tab.dataset.filter;
      renderProducts();
    });
  }
  
  // Mobile Navigation toggle
  if (els.mobileToggle && els.navMenu) {
    els.mobileToggle.addEventListener("click", () => {
      els.mobileToggle.classList.toggle("open");
      els.navMenu.classList.toggle("open");
    });
  }
  
  // Close menu on nav link click
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      // Manage active highlights
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      
      if (els.mobileToggle) els.mobileToggle.classList.remove("open");
      if (els.navMenu) els.navMenu.classList.remove("open");
    });
  });
  
  // Inquiry Form Submission
  if (els.inquiryForm) {
    els.inquiryForm.addEventListener("submit", handleInquirySubmit);
  }
  
  // Modal Close buttons
  const modalClose = document.getElementById("modal-close");
  if (modalClose && els.detailModal) {
    modalClose.addEventListener("click", () => els.detailModal.close());
  }
  const successClose = document.getElementById("success-close-btn");
  if (successClose && els.successModal) {
    successClose.addEventListener("click", () => els.successModal.close());
  }
  
  // Click outside to close modal
  window.addEventListener("click", (e) => {
    if (els.detailModal && e.target === els.detailModal) els.detailModal.close();
    if (els.successModal && e.target === els.successModal) els.successModal.close();
  });
}

// Switch Language
function switchLang(lang) {
  state.lang = lang;
  if (lang === "en") {
    els.langEn.classList.add("active");
    els.langGe.classList.remove("active");
  } else {
    els.langGe.classList.add("active");
    els.langEn.classList.remove("active");
  }
  
  updateUIStrings();
  renderProducts();
  renderInquiryList();
  window.dispatchEvent(new Event('languageChanged'));
}

// Update Static UI Text
function updateUIStrings() {
  const dictionary = TRANSLATIONS[state.lang];
  
  // Translate elements with data-i18n tags
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.dataset.i18n;
    if (dictionary[key]) {
      elem.textContent = dictionary[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
    const key = elem.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      elem.placeholder = dictionary[key];
    }
  });
  
  // Dynamically update document title & meta descriptions
  if (state.lang === "ge") {
    document.title = "GMT ბიოკამინები | პრემიუმ კლასის ეკოლოგიური ბუხრები";
  } else {
    document.title = "GMT Bio-fireplaces | Premium Eco Fireplaces";
  }
}

// Format Price Based on Currency State
function formatPrice(plnAmount) {
  const rate = state.rates[state.currency];
  const converted = plnAmount * rate;
  const symbol = state.currencySymbols[state.currency];
  
  if (state.currency === "PLN") {
    return `${converted.toFixed(2)} ${symbol}`;
  } else if (state.currency === "GEL") {
    return `${converted.toFixed(2)} ${symbol}`;
  } else {
    return `${symbol}${converted.toFixed(2)}`;
  }
}

// Render Products Catalog Grid
function renderProducts() {
  if (!els.productsGrid) return;
  els.productsGrid.innerHTML = "";
  
  const filtered = PRODUCTS.filter(prod => {
    // Category filter
    if (state.activeCategory !== "all" && prod.category !== state.activeCategory) {
      return false;
    }
    
    // Search query
    if (state.searchQuery) {
      const name = (state.lang === "en" ? prod.nameEn : prod.nameGe).toLowerCase();
      const sku = prod.id.toLowerCase();
      const ean = prod.ean.toLowerCase();
      return name.includes(state.searchQuery) || sku.includes(state.searchQuery) || ean.includes(state.searchQuery);
    }
    
    return true;
  });
  
  if (filtered.length === 0) {
    els.productsGrid.innerHTML = `
      <div class="inquiry-empty" style="grid-column: 1 / -1; width: 100%;">
        <p>${state.lang === "en" ? "No products found matching your search." : "პროდუქტები მითითებული ძიებით ვერ მოიძებნა."}</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    const name = state.lang === "en" ? prod.nameEn : prod.nameGe;
    const categoryLabel = state.lang === "en" ? prod.category : (prod.category === "garden" ? "ბაღი" : prod.category === "interior" ? "ინტერიერი" : prod.category === "accessories" ? "აქსესუარი" : "საწვავი");
    const formattedPrice = formatPrice(prod.pricePln);
    
    // Generate color dot html
    let colorsHtml = "";
    if (prod.colors && prod.colors.length > 0) {
      colorsHtml = `<div class="product-colors">`;
      prod.colors.forEach(col => {
        colorsHtml += `<span class="color-dot" style="background-color: ${col};" title="${col}"></span>`;
      });
      colorsHtml += `</div>`;
    }
    
    card.innerHTML = `
      <div class="product-img-container">
        <img src="${prod.image}" alt="${name}" class="product-img" loading="lazy">
        <span class="product-category-tag">${categoryLabel}</span>
      </div>
      <div class="product-body">
        <h3 class="product-title">${name}</h3>
        <div class="product-specs">
          <span><strong>${TRANSLATIONS[state.lang]["sku"]}:</strong> ${prod.id}</span>
          <span><strong>${TRANSLATIONS[state.lang]["dimensions"]}:</strong> ${prod.dimensions}</span>
        </div>
        ${colorsHtml}
        <div class="product-footer">
          <span class="product-price">${formattedPrice}</span>
          <div class="product-actions">
            <button class="btn-card btn-details" data-id="${prod.id}">
              ${TRANSLATIONS[state.lang]["details"]}
            </button>
            <button class="btn-card btn-cart-add" data-id="${prod.id}">
              ${TRANSLATIONS[state.lang]["add-btn"]}
            </button>
          </div>
        </div>
      </div>
    `;
    
    // Bind actions
    card.querySelector(".btn-details").addEventListener("click", () => showProductDetails(prod));
    card.querySelector(".btn-cart-add").addEventListener("click", () => addToInquiry(prod));
    
    els.productsGrid.appendChild(card);
  });
}

// Show Product Details Modal
function showProductDetails(prod) {
  const modalBody = document.getElementById("modal-body");
  const name = state.lang === "en" ? prod.nameEn : prod.nameGe;
  const description = state.lang === "en" ? prod.descEn : prod.descGe;
  const formattedPrice = formatPrice(prod.pricePln);
  
  const colorsText = state.lang === "en" ? prod.colorNamesEn.join(", ") : prod.colorNamesGe.join(", ");
  
  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-container">
        <img src="${prod.image}" alt="${name}" class="modal-img">
      </div>
      <div>
        <h2 class="modal-title">${name}</h2>
        <div class="modal-price">${formattedPrice}</div>
        <p class="modal-desc">${description}</p>
        
        <div class="modal-specs-table">
          <div class="modal-spec-row">
            <span class="modal-spec-label">${TRANSLATIONS[state.lang]["sku"]}</span>
            <span class="modal-spec-val">${prod.id}</span>
          </div>
          <div class="modal-spec-row">
            <span class="modal-spec-label">${TRANSLATIONS[state.lang]["ean"]}</span>
            <span class="modal-spec-val">${prod.ean}</span>
          </div>
          <div class="modal-spec-row">
            <span class="modal-spec-label">${TRANSLATIONS[state.lang]["dimensions"]}</span>
            <span class="modal-spec-val">${prod.dimensions}</span>
          </div>
          <div class="modal-spec-row">
            <span class="modal-spec-label">${TRANSLATIONS[state.lang]["color"]}</span>
            <span class="modal-spec-val">${colorsText}</span>
          </div>
        </div>
        
        <button class="btn btn-primary" id="modal-add-btn" style="width: 100%;">${TRANSLATIONS[state.lang]["add-to-inquiry"]}</button>
      </div>
    </div>
  `;
  
  document.getElementById("modal-add-btn").addEventListener("click", () => {
    addToInquiry(prod);
    els.detailModal.close();
  });
  
  els.detailModal.showModal();
}

// Add Item to Inquiry List
function addToInquiry(product) {
  const existing = state.inquiryList.find(item => item.product.id === product.id);
  
  if (existing) {
    existing.qty++;
  } else {
    state.inquiryList.push({ product, qty: 1 });
  }
  
  saveInquiryToStorage();
  renderInquiryList();
  
  // Custom toast notification style alert
  showToast(TRANSLATIONS[state.lang]["item-added-alert"]);
}

// Remove Item from Inquiry
function removeFromInquiry(productId) {
  state.inquiryList = state.inquiryList.filter(item => item.product.id !== productId);
  saveInquiryToStorage();
  renderInquiryList();
}

// Change Item Quantity
function updateQty(productId, delta) {
  const item = state.inquiryList.find(item => item.product.id === productId);
  if (!item) return;
  
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromInquiry(productId);
  } else {
    saveInquiryToStorage();
    renderInquiryList();
  }
}

// Render Inquiry List (Cart View)
function renderInquiryList() {
  const container = els.inquiryItemsContainer;
  if (!container) {
    // If not on catalog page, just update the header cart badge count
    let totalCount = 0;
    state.inquiryList.forEach(item => {
      totalCount += item.qty;
    });
    if (els.cartCount) {
      if (totalCount === 0) {
        els.cartCount.classList.add("hidden");
      } else {
        els.cartCount.textContent = totalCount;
        els.cartCount.classList.remove("hidden");
      }
    }
    return;
  }
  
  // Clear dynamic elements, keep empty message
  const emptyMsg = els.inquiryEmptyMsg;
  container.innerHTML = "";
  container.appendChild(emptyMsg);
  
  let totalCount = 0;
  let totalPln = 0;
  
  if (state.inquiryList.length === 0) {
    emptyMsg.classList.remove("hidden");
    els.inquirySummaryFooter.classList.add("hidden");
    els.cartCount.classList.add("hidden");
    return;
  }
  
  emptyMsg.classList.add("hidden");
  els.inquirySummaryFooter.classList.remove("hidden");
  els.cartCount.classList.remove("hidden");
  
  state.inquiryList.forEach(item => {
    const prod = item.product;
    const name = state.lang === "en" ? prod.nameEn : prod.nameGe;
    const itemTotalFormatted = formatPrice(prod.pricePln * item.qty);
    
    totalCount += item.qty;
    totalPln += prod.pricePln * item.qty;
    
    const row = document.createElement("div");
    row.className = "inquiry-item";
    row.innerHTML = `
      <img src="${prod.image}" alt="${name}" class="inquiry-item-img">
      <div class="inquiry-item-details">
        <h4 class="inquiry-item-title">${name}</h4>
        <span class="inquiry-item-sku">SKU: ${prod.id}</span>
        <div class="inquiry-item-price">${itemTotalFormatted}</div>
      </div>
      <div class="inquiry-item-actions">
        <div class="qty-control">
          <button class="qty-btn dec-btn" data-id="${prod.id}">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn inc-btn" data-id="${prod.id}">+</button>
        </div>
        <button class="btn-icon remove-btn" data-id="${prod.id}" title="Remove item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;
    
    // Bind listeners
    row.querySelector(".dec-btn").addEventListener("click", () => updateQty(prod.id, -1));
    row.querySelector(".inc-btn").addEventListener("click", () => updateQty(prod.id, 1));
    row.querySelector(".remove-btn").addEventListener("click", () => removeFromInquiry(prod.id));
    
    container.appendChild(row);
  });
  
  els.cartCount.textContent = totalCount;
  els.summaryTotalPrice.textContent = formatPrice(totalPln);
}

// Handle Inquiry Form Submission (Generates a copyable draft block)
function handleInquirySubmit(e) {
  e.preventDefault();
  
  if (state.inquiryList.length === 0) {
    alert(TRANSLATIONS[state.lang]["inquiry-empty-alert"]);
    return;
  }
  
  const name = document.getElementById("form-name").value;
  const email = document.getElementById("form-email").value;
  const phone = document.getElementById("form-phone").value;
  const notes = document.getElementById("form-notes").value;
  
  const dateStr = new Date().toISOString().slice(0, 10);
  
  // Calculate Totals in multiple currencies for luxury reference
  const rates = state.rates;
  let totalPln = 0;
  state.inquiryList.forEach(item => {
    totalPln += item.product.pricePln * item.qty;
  });
  
  const totalGel = totalPln * rates.GEL;
  const totalEur = totalPln * rates.EUR;
  
  // Generate Draft Text
  let draft = `================================================
GMT BIO-FIREPLACES INQUIRY SUMMARY
================================================
Date: ${dateStr}
Client: ${name}
Email: ${email}
Phone: ${phone}

Requested items:
`;

  state.inquiryList.forEach((item, index) => {
    const prod = item.product;
    const prodName = prod.nameEn;
    const linePrice = prod.pricePln * item.qty;
    draft += `${index + 1}. ${prodName} (SKU: ${prod.id}) 
   Quantity: ${item.qty} | Subtotal: ${linePrice} PLN (~${(linePrice * rates.GEL).toFixed(2)} GEL / €${(linePrice * rates.EUR).toFixed(2)})\n`;
  });

  draft += `
------------------------------------------------
Suggested Retail Total:
PLN: ${totalPln.toFixed(2)} zł
GEL: ${totalGel.toFixed(2)} ₾
EUR: €${totalEur.toFixed(2)}

Notes/Additional message:
"${notes || 'None'}"

================================================
* This inquiry represents a 40% first-order wholesale discount opportunity. 
GMT agents will confirm the official discount price list shortly.
================================================`;

  // Populate Success Modal and Open
  els.successBody.textContent = draft;
  els.successModal.showModal();
  
  // Reset Form and Cart
  els.inquiryForm.reset();
  state.inquiryList = [];
  saveInquiryToStorage();
  renderInquiryList();
}

// Storage Helpers
function saveInquiryToStorage() {
  localStorage.setItem("gmt_inquiry", JSON.stringify(state.inquiryList));
}

function loadInquiryFromStorage() {
  const raw = localStorage.getItem("gmt_inquiry");
  if (raw) {
    try {
      state.inquiryList = JSON.parse(raw);
    } catch (err) {
      state.inquiryList = [];
    }
  }
}

// Toast Alert Helper
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // CSS styles added inline for toast simplicity
  Object.assign(toast.style, {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    background: "var(--accent-gradient)",
    color: "#fff",
    padding: "0.8rem 1.5rem",
    borderRadius: "8px",
    fontFamily: "var(--font-headers)",
    fontWeight: "600",
    boxShadow: "0 5px 15px rgba(255, 94, 0, 0.4)",
    zIndex: "9999",
    transform: "translateY(20px)",
    opacity: "0",
    transition: "all 0.3s ease"
  });
  
  // Trigger entry animation
  setTimeout(() => {
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";
  }, 50);
  
  // Remove after 3s
  setTimeout(() => {
    toast.style.transform = "translateY(20px)";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// FAQ Accordion Logic
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;
    
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      
      // Close all other items
      faqItems.forEach(otherItem => {
        const otherBtn = otherItem.querySelector('.faq-question');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherItem !== item) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherAnswer.classList.remove('open');
          otherItem.classList.remove('open');
        }
      });
      
      // Toggle current item
      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        answer.classList.remove('open');
        item.classList.remove('open');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
        item.classList.add('open');
      }
    });
  });
}

// Canvas Sparks Background Particle System
function setupCanvasBackground() {
  const canvas = els.sparksCanvas = document.getElementById("sparks-canvas");
  const ctx = canvas.getContext("2d");
  
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
  
  class Spark {
    constructor() {
      this.reset();
    }
    
    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 100;
      this.size = Math.random() * 2 + 0.5;
      this.speedY = -(Math.random() * 1.5 + 0.5);
      this.speedX = Math.random() * 0.8 - 0.4;
      this.opacity = Math.random() * 0.5 + 0.3;
      this.fade = Math.random() * 0.005 + 0.002;
      this.color = this.getRandomColor();
    }
    
    getRandomColor() {
      const colors = [
        "rgba(255, 94, 0, ",
        "rgba(255, 183, 0, ",
        "rgba(255, 40, 0, "
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.opacity -= this.fade;
      
      if (this.opacity <= 0 || this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.opacity + ")";
      ctx.fill();
    }
  }
  
  const sparksCount = 45;
  const sparks = Array.from({ length: sparksCount }, () => new Spark());
  
  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Draw Radial dark base gradient (gives deep dark atmosphere)
    const radialGrad = ctx.createRadialGradient(width/2, height/2, 10, width/2, height/2, Math.max(width, height));
    radialGrad.addColorStop(0, "#0e0e14");
    radialGrad.addColorStop(1, "#050508");
    ctx.fillStyle = radialGrad;
    ctx.fillRect(0, 0, width, height);
    
    sparks.forEach(spark => {
      spark.update();
      spark.draw();
    });
    requestAnimationFrame(animate);
  }
  
  animate();
}

// Hero Section Carousel Slides Dataset
const HERO_SLIDES = [
  {
    badgeEn: "For Apartments & Homes",
    badgeGe: "ბინისთვის და სახლისთვის",
    titleEn: "Bring the Warmth of a <span class='gradient-text'>Real Flame</span> Into Your Home",
    titleGe: "მიიღეთ <span class='gradient-text'>ნამდვილი ცეცხლის</span> სითბო თქვენს სახლში",
    descEn: "Eco-friendly, odorless, and smokeless bio-fireplaces. No chimney required. Safe to use in apartments, living rooms, and bedrooms.",
    descGe: "ეკოლოგიურად სუფთა, უსუნო და უკვამლო ბიოკამინები. არ საჭიროებს საკვამურს. უსაფრთხოა ბინებში, მისაღებ ოთახებსა და საძინებლებში."
  },
  {
    badgeEn: "Garden & Terrace Series",
    badgeGe: "ბაღის და ტერასის სერია",
    titleEn: "Warmth & Magic <span class='gradient-text'>Under the Open Sky</span>",
    titleGe: "სითბო და მაგია <span class='gradient-text'>ღია ცის ქვეშ</span>",
    descEn: "Outdoor bio-fireplaces designed for gardens, terraces, and balconies. Resistant to weather conditions, creating a cozy evening atmosphere.",
    descGe: "გარე გამოყენების ბიოკამინები ბაღების, ტერასებისა და აივნებისთვის. მდგრადია ამინდის მიმართ და ქმნის საოცარ საღამოს ატმოსფეროს."
  },
  {
    badgeEn: "Freestanding & Portable",
    badgeGe: "მობილური ბიოკამინები",
    titleEn: "Move the Fire <span class='gradient-text'>Wherever You Go</span>",
    titleGe: "გადაიტანეთ ცეცხლი <span class='gradient-text'>იქ, სადაც გსურთ</span>",
    descEn: "No installation or assembly required. Simply place it on the table, floor, or terrace and ignite instantly.",
    descGe: "არ საჭიროებს მონტაჟს ან აწყობას. უბრალოდ განათავსეთ მაგიდაზე, იატაკზე ან ტერასაზე და აანთეთ მყისიერად."
  },
  {
    badgeEn: "Corner & Built-in",
    badgeGe: "ჩაშენებული კამინები",
    titleEn: "Elegant <span class='gradient-text'>Architectural Integration</span>",
    titleGe: "ელეგანტური <span class='gradient-text'>არქიტექტურული გადაწყვეტა</span>",
    descEn: "Perfect for modern minimalist interiors, plasterboards, and wall niches. View the gorgeous flame from multiple angles.",
    descGe: "იდეალურია თანამედროვე მინიმალისტური ინტერიერისთვის, თაბაშირ-მუყაოსა და კედლის ნიშებისთვის. აკონტროლეთ ალი სხვადასხვა კუთხიდან."
  }
];

let currentSlide = 0;
let slideInterval;

function setupHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const badgeEl = document.getElementById('hero-badge-elem');
  const titleEl = document.getElementById('hero-title-elem');
  const descEl = document.getElementById('hero-desc-elem');
  
  if (!slides.length || !dots.length) return;
  
  // Function to show a specific slide
  function showSlide(index) {
    // Clear active classes
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    // Set active
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
    
    // Update texts with a premium fade transition
    const slideData = HERO_SLIDES[index];
    const badgeText = state.lang === 'en' ? slideData.badgeEn : slideData.badgeGe;
    const titleText = state.lang === 'en' ? slideData.titleEn : slideData.titleGe;
    const descText = state.lang === 'en' ? slideData.descEn : slideData.descGe;
    
    // Fade out text, change content, fade in
    const textEls = [badgeEl, titleEl, descEl];
    textEls.forEach(el => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(12px)';
        el.style.transition = 'opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
      }
    });
    
    setTimeout(() => {
      if (badgeEl) badgeEl.textContent = badgeText;
      if (titleEl) titleEl.innerHTML = titleText;
      if (descEl) descEl.textContent = descText;
      
      textEls.forEach(el => {
        if (el) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    }, 350);
  }
  
  // Dot click handlers
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      resetAutoplay();
    });
  });
  
  // Autoplay function
  function startAutoplay() {
    slideInterval = setInterval(() => {
      let next = (currentSlide + 1) % slides.length;
      showSlide(next);
    }, 6000); // switch every 6 seconds
  }
  
  function resetAutoplay() {
    clearInterval(slideInterval);
    startAutoplay();
  }
  
  // Initial set
  showSlide(0);
  startAutoplay();
  
  // Listen for language change events to update texts instantly
  window.addEventListener('languageChanged', () => {
    showSlide(currentSlide);
  });
}

