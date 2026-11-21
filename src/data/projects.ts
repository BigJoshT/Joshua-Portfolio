export type Category = "Business Website" | "Funnel" | "Online Store" | "Redesign";

export type Project = {
  slug: string;
  title: string;
  /** One line. What it is, who it's for. */
  summary: string;
  category: Category;
  /** Platform it was built on (GoHighLevel, WordPress, Shopify, etc.). Shown as a chip. */
  platform?: string;
  year: number;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  /** Two hex stops used for the placeholder cover when there's no image. */
  cover: [string, string];
  /** Cover image in public/projects/: 1200×750 (16:10) WebP or JPG. */
  image?: string;
  /** Scroll a full-page screenshot inside the project carousel preview on hover. */
  scrollPreview?: boolean;
  /** Intrinsic dimensions for full-page preview screenshots. */
  previewDimensions?: { width: number; height: number };
  /** Set true for the three shown on the home page. */
  featured?: boolean;
  /** Live site: shows a "Visit live site" button on the case study when set. */
  liveUrl?: string;
};

/* ------------------------------------------------------------------
   ⚠️ SAMPLE PROJECTS: replace every one with your real work.

   The home showcase, /portfolio grid, filters, search and the
   case-study pages all read from this one array.

   For each real project:
     1. Take a screenshot of the live site (1200×750 works best),
        save it as public/projects/<slug>.webp (or .jpg).
     2. Copy one block below, change the slug, text and platform,
        set `image: "/projects/<slug>.webp"` and `liveUrl`.
     3. Set `featured: true` on your best three for the home page.
   Delete the samples once you have three or more of your own.
------------------------------------------------------------------ */
export const projects: Project[] = [
  {
    slug: "upturn-website",
    title: "Upturn Website",
    summary:
      "A full WordPress website for Upturn, bringing together its mission, team, issue-area research, publications, careers and ways to stay connected.",
    category: "Business Website",
    platform: "WordPress",
    year: 2026,
    tags: ["WordPress", "Business Website", "Technology", "Equity & Justice"],
    challenge:
      "Make a broad body of research and advocacy easy to explore while clearly communicating Upturn’s mission and work across technology, equity and justice.",
    solution:
      "Built a WordPress website with clear navigation for About, Team, Careers and seven issue areas, plus a searchable archive of reports, studies, articles and policy work.",
    results: [
      "A complete website that helps visitors explore Upturn’s mission, research and advocacy, find information about the team and careers, and stay connected through contact and newsletter links.",
    ],
    cover: ["#3c3cb1", "#242143"],
    image: "/projects/upturn-website.png",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 4359 },
    liveUrl: "https://upturn.org",
    featured: true,
  },
  {
    slug: "torz-freight-website",
    title: "Torz Freight Website",
    summary:
      "A full GoHighLevel website combining free freight calculators, practical owner-operator resources and dispatch support for independent carriers and small fleets.",
    category: "Business Website",
    platform: "GoHighLevel",
    year: 2026,
    tags: ["GoHighLevel", "Freight Calculators", "Carrier Resources", "Dispatch Support"],
    challenge:
      "Give owner-operators, independent carriers and small fleets a simple place to evaluate freight economics, find practical guidance and request support without a complicated dashboard.",
    solution:
      "Built a GoHighLevel website with cost-per-mile, load-profit and revenue-per-mile calculators, a resource library covering operating costs, rates, deadhead and load decisions, plus dispatch service and contact pages.",
    results: [
      "A connected freight resource hub where carriers can run their numbers, learn the business behind each mile and contact Torz Freight for dispatch support.",
    ],
    cover: ["#0b2033", "#07131e"],
    image: "/projects/torz-freight.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 7564 },
    liveUrl: "https://torzfreight.com",
    featured: true,
  },
  {
    slug: "mod-notebooks-website",
    title: "Mod Notebooks Website",
    summary:
      "A full e-commerce website for Mod, showcasing a paper notebook that can be digitized into a cloud-synced app, with individual and custom corporate order options.",
    category: "Online Store",
    platform: "Shopify",
    year: 2026,
    tags: ["Shopify", "E-commerce", "Product Storytelling", "Corporate Gifts"],
    challenge:
      "Explain how the paper notebook, mail-in digitization process and Mod app work together, while helping individual and corporate customers find the right order option.",
    solution:
      "Built an e-commerce website with product details, notebook features, a four-step digitization guide, app and sync information, individual ordering, small-batch and corporate-gift options, customer reviews and a blog.",
    results: [
      "A connected shopping experience that guides customers from learning about the notebook to choosing an order path and understanding how their notes move into the Mod app.",
    ],
    cover: ["#75563f", "#263e40"],
    image: "/projects/mod-notebooks.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 9552 },
    liveUrl: "https://modnotebooks.com/",
    featured: true,
  },
  {
    slug: "golden-grove-roofing-website",
    title: "Golden Grove Roofing Website",
    summary:
      "A GoHighLevel website and lead-generation setup for Golden Grove Roofing & Construction, with service information, estimate requests, CRM automation and campaign workflows.",
    category: "Business Website",
    platform: "GoHighLevel",
    year: 2026,
    tags: ["GoHighLevel", "Roofing", "Lead Generation", "CRM Automation", "Campaigns"],
    challenge:
      "Showcase Golden Grove’s roofing and construction services, trust signals and service areas while making it easy for residential and commercial customers to request an inspection or estimate.",
    solution:
      "Built a GoHighLevel website with service and service-area content, free inspection and estimate forms, contact paths, CRM automations and campaign workflows to support enquiry follow-up.",
    results: [
      "A connected lead-generation experience that guides roofing prospects from service information to a free inspection request and GoHighLevel follow-up.",
    ],
    cover: ["#2b2924", "#a97711"],
    image: "/projects/golden-grove.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 11359 },
    liveUrl: "https://goldengroveco.com/",
  },
  {
    slug: "quality-way-roofing-website",
    title: "Quality Way Roofing Website",
    summary:
      "A full WordPress website for Quality Way Roofing & Masonry, presenting Chicago-area roofing and masonry services, project examples and free quote requests.",
    category: "Business Website",
    platform: "WordPress",
    year: 2026,
    tags: ["WordPress", "Roofing", "Masonry", "Chicago", "Lead Generation"],
    challenge:
      "Help Chicago-area homeowners and commercial property owners understand the company’s roofing and masonry services, review completed work and request a quote.",
    solution:
      "Built a WordPress website with company information, roofing and masonry service pages, project showcases, trust and experience details, and clear free-quote and contact paths.",
    results: [
      "A complete service-business website that presents Quality Way’s work and gives residential and commercial visitors a direct path to request an estimate.",
    ],
    cover: ["#07152f", "#d7192d"],
    image: "/projects/quality-way-roofing.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 8598 },
    liveUrl: "https://www.qwchicagoroof.com/",
  },
  {
    slug: "european-tailors-landing-page",
    title: "European Tailors & Cleaners",
    summary:
      "A Squarespace landing page for a Chicago tailoring and dry-cleaning business, highlighting alterations, garment repair and estimate requests.",
    category: "Business Website",
    platform: "Squarespace",
    year: 2026,
    tags: ["Squarespace", "Landing Page", "Tailoring", "Dry Cleaning", "Chicago"],
    challenge:
      "Present the tailoring and garment-care services clearly and help Chicago customers quickly find the estimate, location and contact information they need.",
    solution:
      "Created a Squarespace landing page with a prominent estimate call to action, service highlights for alterations, dry cleaning and repairs, location and business hours, and customer testimonials.",
    results: [
      "A focused local-business landing page that brings key services, customer reviews and estimate/contact options together in one clear experience.",
    ],
    cover: ["#3c332b", "#d5a51c"],
    image: "/projects/european-tailors.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 5505 },
    liveUrl: "https://europeantailors.net/",
  },
  {
    slug: "roof-express-roofing-website",
    title: "ROOF EXPRESS Website",
    summary:
      "A full WordPress website for a Bay Area roofing contractor, bringing together roofing systems, services, credentials, project examples and free estimate requests.",
    category: "Business Website",
    platform: "WordPress",
    year: 2025,
    tags: ["WordPress", "Roofing", "Bay Area", "Lead Generation", "Service Areas"],
    challenge:
      "Help Bay Area property owners understand roofing options, evaluate the contractor’s experience and credentials, and find a clear next step for inspections and estimates.",
    solution:
      "Built a WordPress website presenting residential and commercial roofing services, roofing-system options, the inspection and installation process, credentials and warranty information, recent projects, reviews, service areas and roofing resources, with prominent estimate and contact paths.",
    results: [
      "A comprehensive roofing website that connects service and warranty information with local project proof, educational resources and clear estimate requests across the Bay Area.",
    ],
    cover: ["#123d5c", "#d44a20"],
    image: "/projects/roof-express.jpg",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 20407 },
    liveUrl: "https://roof-ex.com/",
  },
  {
    slug: "glz-digital-marketing-website",
    title: "GLZ Digital Marketing Website",
    summary:
      "A GoHighLevel website for a digital marketing agency helping business owners manage CRM follow-up, automation and online marketing, with support in Spanish and English.",
    category: "Business Website",
    platform: "GoHighLevel",
    year: 2025,
    tags: ["GoHighLevel", "Digital Marketing", "CRM Automation", "Bilingual Support", "Lead Generation"],
    challenge:
      "Show how GLZ helps business owners reduce missed enquiries and organize their marketing, while making its services and bilingual support easy to understand.",
    solution:
      "Built a GoHighLevel website presenting CRM and automated follow-up, social media management, digital strategy, SEO, web design and advertising, alongside the founder’s story, client testimonials, contact form and call-booking options.",
    results: [
      "A service-focused agency website that connects its marketing and automation offer with client proof and clear contact and appointment paths.",
    ],
    cover: ["#1a1019", "#b93582"],
    image: "/projects/glz-digital-marketing.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 11200 },
    liveUrl: "https://glzdigitalmktg.co/home",
  },
  {
    slug: "luisa-marin-heal-within-website",
    title: "Luisa Marin — Heal From Within",
    summary:
      "A Hostinger website for holistic practitioner Luisa Marin, presenting emotional wellness services, practitioner credentials, client reviews and appointment booking.",
    category: "Business Website",
    platform: "Hostinger",
    year: 2024,
    tags: ["Hostinger", "Holistic Wellness", "Service Website", "Reviews", "Appointment Booking"],
    challenge:
      "Help prospective clients understand Luisa’s approach and available sessions, build confidence through practitioner information and reviews, and make it easy to book an appointment.",
    solution:
      "Created a service website presenting emotional regulation and subconscious reprogramming, discovery calls and paid sessions, practitioner background and credentials, client reviews, and prominent booking options.",
    results: [
      "A clear client journey from learning about Luisa’s services and experience to reviewing feedback and scheduling a session.",
    ],
    cover: ["#17425a", "#09a6a3"],
    image: "/projects/luisa-marin-heal-within.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 12936 },
    liveUrl: "https://heal.me/luisamarin",
  },
  {
    slug: "ruadh-fashion-store",
    title: "RUADH Fashion Store",
    summary:
      "A Wix online store for RUADH, presenting premium apparel collections with editorial campaign imagery and a streamlined shopping experience.",
    category: "Online Store",
    platform: "Wix",
    year: 2023,
    tags: ["Wix", "Fashion", "Online Store", "Product Collections", "Denim"],
    challenge:
      "Create a distinctive digital storefront that lets shoppers discover RUADH’s apparel collections while keeping product details and the path to purchase easy to find.",
    solution:
      "Built a fashion storefront with campaign-led hero imagery, new arrivals and product grids, collection features for denim, outerwear and tops, and familiar shop, bag and checkout navigation.",
    results: [
      "An editorial shopping experience that pairs RUADH’s visual identity with browsable product collections and direct shopping paths.",
    ],
    cover: ["#3c4548", "#15191b"],
    image: "/projects/ruadh-fashion.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 9775 },
    liveUrl: "https://www.ruadh.com/",
  },
  {
    slug: "onskn-skincare-store",
    title: "ONSKN Skincare Store",
    summary:
      "A Shopify storefront for ONSKN skincare, showcasing its cleanser, serum, moisturizer and product set with editorial imagery and customer reviews.",
    category: "Online Store",
    platform: "Shopify",
    year: 2025,
    tags: ["Shopify", "Skincare", "E-commerce", "Product Merchandising", "Beauty"],
    challenge:
      "Present a focused skincare range in a polished storefront, making best sellers, product details, customer feedback and shopping options easy to discover.",
    solution:
      "Built a Shopify store with a campaign-led hero, press mentions, featured product cards, product storytelling, customer reviews, collection imagery, shopping navigation and an email signup.",
    results: [
      "A cohesive direct-to-consumer storefront that brings ONSKN’s skincare products, brand imagery and shopping paths together.",
    ],
    cover: ["#a34a2c", "#e2b579"],
    image: "/projects/onskn-skincare.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 7729 },
    liveUrl: "https://onskn.com/",
  },
  {
    slug: "core-atelier-pilates-website",
    title: "Core Atelier Pilates Website",
    summary:
      "A Squarespace website for Core Atelier, presenting its Pilates studio, small-group classes, private sessions, events and shop.",
    category: "Business Website",
    platform: "Squarespace",
    year: 2025,
    tags: ["Squarespace", "Pilates", "Studio Website", "Class Booking", "Events"],
    challenge:
      "Bring the studio’s distinctive atmosphere and class experience online while helping visitors explore sessions, book classes and discover studio events and products.",
    solution:
      "Built a Squarespace website with immersive studio imagery, the Core Atelier story, class and booking information, shop and event sections, testimonials, and clear sign-up and contact paths.",
    results: [
      "A polished studio website that connects the brand experience with class discovery, booking, events and shop navigation.",
    ],
    cover: ["#754b34", "#f4e3d8"],
    image: "/projects/core-atelier-pilates.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 5932 },
    liveUrl: "https://coreatelierpilates.com/",
  },
  {
    slug: "m-tech-connect-website",
    title: "M-Tech Connect Website",
    summary:
      "A WordPress website for a superyacht technology specialist, presenting new-build, refit and support services for integrated onboard systems.",
    category: "Business Website",
    platform: "WordPress",
    year: 2025,
    tags: ["WordPress", "Superyachts", "Marine Technology", "Systems Integration", "Project Portfolio"],
    challenge:
      "Explain a specialist range of onboard technology and project services to yacht owners, shipyards and build teams, while showing the experience behind the work.",
    solution:
      "Built a WordPress website with dedicated content for new builds, refits and support, integrated onboard systems, consultancy and project delivery, notable projects, partner brands and a direct project enquiry form.",
    results: [
      "A clear service and portfolio experience that helps superyacht clients explore the systems, project expertise and support offered by M-Tech Connect.",
    ],
    cover: ["#06213a", "#38c9d3"],
    image: "/projects/mtech-connect.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 13708 },
    liveUrl: "https://www.mtechconnect.com/",
  },
  {
    slug: "artisan-roofing-website",
    title: "Artisan Roofing Website",
    summary:
      "A Squarespace website for an Atlantic Canada exterior-solutions company, presenting roofing, siding, windows and doors with a guided estimate experience.",
    category: "Business Website",
    platform: "Squarespace",
    year: 2025,
    tags: ["Squarespace", "Roofing", "Atlantic Canada", "Lead Generation", "Virtual Estimates"],
    challenge:
      "Help homeowners across multiple Atlantic Canadian service areas compare exterior services, understand Artisan’s process and credentials, and request a project estimate.",
    solution:
      "Built a Squarespace website with a guided multi-step quote form, service and location information, customer reviews, financing details, the P.R.O.V.E.N. quality framework, aerial measurement messaging, warranty information, project showcase and news.",
    results: [
      "A service-led website that brings regional roofing and exterior services together with project information and a clear estimate request path.",
    ],
    cover: ["#17191c", "#ffcc32"],
    image: "/projects/artisan-roofing.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 13950 },
    liveUrl: "https://artisanroofing.ca/",
  },
  {
    slug: "verity-and-co-homes-website",
    title: "Verity & Co. Homes Website",
    summary:
      "A WordPress website for a family homebuilder, showcasing new homes, the buying journey and the people behind the business.",
    category: "Business Website",
    platform: "WordPress",
    year: 2026,
    tags: ["WordPress", "Homebuilder", "Property Search", "Yorkshire & Lancashire"],
    challenge:
      "Present a family-led homebuilder's available properties, buying support and brand story in a warm, considered experience that helps visitors find their next home.",
    solution:
      "Created a WordPress website with a postcode-based home search, buying journey guidance, property listings, homeowner stories, company values, journal content and support for moving home.",
    results: [
      "Visitors can explore homes and begin a property search",
      "Buying guidance and homeowner stories build context around the journey",
      "The family business and its regional focus are clearly represented",
    ],
    cover: ["#e9e3da", "#171715"],
    image: "/projects/verity-co-homes.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 14344 },
    liveUrl: "https://www.verityandcohomes.com/",
  },
  {
    slug: "stampede-auto-dealership-website",
    title: "Stampede Auto Website",
    summary:
      "A WordPress website for an independent Calgary used-car dealership, connecting vehicle inventory, financing, trade-ins and customer support with online enquiries.",
    category: "Business Website",
    platform: "WordPress",
    year: 2025,
    tags: ["WordPress", "Automotive", "Used Cars", "Financing", "Lead Generation"],
    challenge:
      "Help Calgary-area car shoppers browse available vehicles, understand financing and trade-in options, and contact the dealership with confidence.",
    solution:
      "Built a WordPress website with vehicle inventory pathways, car and truck categories, financing and budget tools, a vehicle trade-in offer, dealership information, customer reviews, FAQs, and clear pre-approval and contact calls to action.",
    results: [
      "A dealership website that brings vehicle discovery, financing information and sales enquiries into one straightforward customer journey.",
    ],
    cover: ["#151922", "#f04416"],
    image: "/projects/stampede-auto.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 10015 },
    liveUrl: "https://stampedeauto.com/",
  },
  {
    slug: "salin-11-dental-practice",
    title: "SALIN 11 Dental Practice Website",
    summary:
      "A bold WordPress website for a modern dental practice in Rosenheim, presenting its team, treatments and appointment options.",
    category: "Business Website",
    platform: "WordPress",
    year: 2023,
    tags: ["WordPress", "Dental Practice", "Healthcare", "Appointments"],
    challenge:
      "A dental practice wanted to distinguish itself with a welcoming wellness atmosphere while making its treatments, opening hours and appointment options easy to find.",
    solution:
      "Built a high-contrast, editorial-style site introducing the practice and its team, organizing dental services, and giving patients clear ways to make appointments or contact the office.",
    results: [
      "Patients can scan treatment options and practice information",
      "Appointment and WhatsApp actions are easy to spot",
      "Distinctive visuals communicate the practice's modern, welcoming feel",
    ],
    cover: ["#080808", "#f5f5f5"],
    image: "/projects/salin-11-dental-practice.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 11740 },
    liveUrl: "https://www.salin11.de/",
  },
  {
    slug: "allinn-student-accommodation-website",
    title: "all.inn Student Accommodation Website",
    summary:
      "A lively WordPress website helping students find and apply for accommodation in Gdańsk.",
    category: "Business Website",
    platform: "WordPress",
    year: 2026,
    tags: ["WordPress", "Student Accommodation", "Room Booking", "Gdańsk"],
    challenge:
      "Students needed a clear way to compare room types, understand what was included, and learn about the community and location before applying.",
    solution:
      "Created a colorful accommodation site that brings room options and pricing together with shared spaces, student services, location details, FAQs and a direct application form.",
    results: [
      "Students can compare available room types and amenities",
      "Key location and community information is easy to explore",
      "A clear application path helps turn interest into enquiries",
    ],
    cover: ["#ffff66", "#f3a8d3"],
    image: "/projects/allinn-student-accommodation.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 13878 },
    liveUrl: "https://allinnhomeofstudents.com/",
  },
  {
    slug: "exergy3-thermal-energy-storage-website",
    title: "Exergy3 Website",
    summary:
      "A Wix Studio website explaining Exergy3's high-temperature thermal energy storage technology and its role in industrial decarbonisation.",
    category: "Business Website",
    platform: "Wix Studio",
    year: 2025,
    tags: ["Wix Studio", "Clean Energy", "Thermal Energy Storage", "Industrial Decarbonisation"],
    challenge:
      "Make a complex industrial energy technology understandable to different audiences while showing its potential to turn renewable electricity into high-temperature process heat.",
    solution:
      "Created an energy-focused website with a clear explanation of the storage process, benefits, industry applications, featured case studies, customer and collaborator logos, and routes to contact the team.",
    results: [
      "The thermal storage process is explained through visual steps",
      "Visitors can explore benefits, industries and project case studies",
      "Clear contact paths support enquiries from potential partners",
    ],
    cover: ["#0a302b", "#d7ff9b"],
    image: "/projects/exergy3-energy-storage.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 10825 },
    liveUrl: "https://www.exergy3.com/",
  },
  {
    slug: "yucca-packaging-website",
    title: "Yucca Packaging Website",
    summary:
      "A Wix Studio website presenting packaging products and solutions for food service, food processing and agriculture businesses.",
    category: "Business Website",
    platform: "Wix Studio",
    year: 2026,
    tags: ["Wix Studio", "Packaging", "B2B", "Sustainable Packaging"],
    challenge:
      "Help business buyers discover packaging suited to their industry, browse products and custom options, and understand quality standards and sustainability commitments.",
    solution:
      "Created a product-led website with industry-specific packaging solutions, product listings, custom packaging information, company resources, standards, FAQs and clear contact paths.",
    results: [
      "Visitors can explore packaging by industry and product type",
      "New products and custom packaging options are easy to discover",
      "Company standards and common buying questions are accessible",
    ],
    cover: ["#dedac5", "#0a3026"],
    image: "/projects/yucca-packaging.webp",
    scrollPreview: true,
    previewDimensions: { width: 1920, height: 9201 },
    liveUrl: "https://yucca.co.za/",
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

export const categories: Category[] = ["Business Website", "Funnel", "Online Store", "Redesign"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
