export type Testimonial = {
  id: string;
  quote: string;
  excerpt?: string;
  name: string;
  role: string;
  /** Where the review came from, when known. */
  source?: string;
  /** Public path for a client-approved photo. */
  avatar?: string;
  /** Only include a rating when the client actually provided one. */
  rating?: number;
  /** Clearly marks editable content that is not a real testimonial. */
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "roof-express-founder",
    quote:
      "Joshua did an excellent job building our website. He understood our vision, paid attention to every detail, and delivered a clean, professional, and user friendly design. Communication was smooth throughout the project, and he was always willing to make adjustments to ensure everything was right. I'm very satisfied with his work and would definitely recommend him to anyone looking for a reliable web designer.",
    excerpt:
      "Joshua understood our vision, paid attention to every detail, and delivered a clean, professional, user friendly website. Communication was smooth throughout...",
    name: "Abu M.",
    role: "Founder, Roof Express",
    avatar: "/images/testimonials/abu-m-roof-express.jpg",
  },
  {
    id: "glz-digital-marketing-founder",
    quote:
      "Honestly, Josh made the whole website process so much easier than I expected. He understood the creative direction I wanted and brought it to life beautifully. I especially appreciate his attention to detail and how open he was to feedback. The final result speaks for itself. Definitely someone I'd be happy to work with again!",
    excerpt:
      "Honestly, Josh made the whole website process so much easier than I expected. He understood the creative direction I wanted and brought it to life beautifully...",
    name: "Fátima",
    role: "Founder, GLZ Digital Marketing",
    avatar: "/images/testimonials/fatima-glz-digital-marketing.jpg",
  },
  {
    id: "luisa-marin",
    quote:
      "Working with Josh was such a positive experience. He took the time to understand my brand and what I wanted to communicate, then turned those ideas into a beautiful website that feels truly aligned with my work. I love how everything came together. Professional, thoughtful, and easy to work with!",
    excerpt:
      "Working with Josh was such a positive experience. He took the time to understand my brand and what I wanted to communicate, then turned those ideas into a beautiful website...",
    name: "Luisa Marin",
    role: "Holistic Healing Practitioner",
    avatar: "/images/testimonials/luisa-marin.jpg",
  },
  {
    id: "ruadh",
    quote:
      "Josh really delivered on this project. He brought a fresh perspective to the design, made sure everything looked polished, and created a website that perfectly captures the brand. I appreciated his creativity, patience, and commitment to getting things right. Great experience from start to finish!",
    excerpt:
      "Josh really delivered on this project. He brought a fresh perspective to the design, made sure everything looked polished, and created a website that perfectly captures the brand...",
    name: "Jac Cameron",
    role: "Founder, RÙADH",
    avatar: "/images/testimonials/ruadh-logo.jpg",
  },
  {
    id: "onskn",
    quote:
      "I couldn't be happier with how the website turned out. Joshua did a fantastic job bringing everything together and making the site look modern, clean, and easy to navigate. He was attentive to my ideas and made the entire process stress free. Thank you, Josh!",
    excerpt:
      "I couldn't be happier with how the website turned out. Joshua did a fantastic job bringing everything together and making the site look modern, clean, and easy to navigate...",
    name: "Dr. Kianna De La Mores",
    role: "Founder, ONSKN",
    avatar: "/images/testimonials/onskn-client.jpg",
  },
  {
    id: "core-atelier-founder",
    quote:
      "Josh did a wonderful job capturing the feel of my brand. The website looks beautiful, feels welcoming, and makes it easy for visitors to explore our services. He understood the atmosphere I wanted to create and translated it into a design that feels both polished and inviting. I truly appreciate his work!",
    excerpt:
      "Josh did a wonderful job capturing the feel of my brand. The website looks beautiful, feels welcoming, and makes it easy for visitors to explore our services...",
    name: "Lena Chien",
    role: "Founder, Core Atelier Pilates",
    avatar: "/images/testimonials/core-atelier-founder.png",
  },
  {
    id: "m-tech-connect",
    quote:
      "He understood exactly what we needed and delivered a website that represents our business professionally. He did a great job presenting our services, bringing structure to the content, and making everything easy to navigate. The attention to detail was impressive, and we're really pleased with the outcome. Great work, Josh!",
    excerpt:
      "He understood exactly what we needed and delivered a website that represents our business professionally. He did a great job presenting our services, bringing structure to the content...",
    name: "Mark Emmett",
    role: "M-Tech Connect",
    avatar: "/images/testimonials/mark-emmett-m-tech-connect.webp",
  },
  {
    id: "artisan-roofing-founder",
    quote:
      "Joshua did a fantastic job bringing our website together. He understood the importance of creating a strong first impression and made sure our services were presented clearly and professionally. The finished website looks great and makes it much easier for potential customers to learn about what we offer. Really appreciate his hard work!",
    excerpt:
      "Joshua did a fantastic job bringing our website together. He understood the importance of creating a strong first impression and made sure our services were presented clearly and professionally...",
    name: "Brad Baker",
    role: "Founder, Artisan Roofing",
    avatar: "/images/testimonials/brad-baker-artisan-roofing.webp",
  },
  {
    id: "salin-11-owner",
    quote:
      "Josh brought our vision to life beautifully. From the clean layout to the way our treatments and services are presented, every detail feels thoughtfully put together. He made sure the website reflects the modern standard of our practice while keeping it welcoming and easy to use. We're very happy with the result.",
    excerpt:
      "Josh brought our vision to life beautifully. From the clean layout to the way our treatments and services are presented, every detail feels thoughtfully put together...",
    name: "Oliver Spitz",
    role: "Owner, SALIN 11",
    avatar: "/images/testimonials/oliver-spitz-salin-11.png",
  },
  {
    id: "verity-co-homes",
    quote:
      "Working with Josh was a real pleasure. He took the time to understand our brand and what makes our business different. The website came together beautifully, with a great balance of style, clarity, and functionality. It feels like a true reflection of who we are as a company. We couldn't be more pleased with his work.",
    excerpt:
      "Working with Josh was a real pleasure. He took the time to understand our brand and what makes our business different. The website came together beautifully, with a great balance of style, clarity, and functionality...",
    name: "Sarah Barraclough",
    role: "Managing Director, Verity & Co Homes",
    avatar: "/images/testimonials/sarah-barraclough-verity-co.webp",
  },
  {
    id: "yucca-packaging",
    quote:
      "Josh did a great job turning a complex range of products and services into a website that feels simple and effortless to explore. The design gives our brand a stronger online presence, and the shopping experience is well organised. His ability to combine good design with practical functionality really stood out. Excellent work.",
    excerpt:
      "Josh did a great job turning a complex range of products and services into a website that feels simple and effortless to explore. The design gives our brand a stronger online presence, and the shopping experience is well organised...",
    name: "Reynardt Bester",
    role: "General Manager, Yucca Packaging",
    avatar: "/images/testimonials/reynardt-bester-yucca.jpg",
  },
];
