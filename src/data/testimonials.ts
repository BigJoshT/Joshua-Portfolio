export type Testimonial = {
  id: string;
  quote: string;
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
    id: "testimonial-placeholder-1",
    quote:
      "Add an approved testimonial from a real client. Replace this placeholder with their exact words before publishing.",
    name: "Client name",
    role: "Client role or business",
    placeholder: true,
  },
  {
    id: "testimonial-placeholder-2",
    quote:
      "Add an approved testimonial from a real client. Replace this placeholder with their exact words before publishing.",
    name: "Client name",
    role: "Client role or business",
    placeholder: true,
  },
  {
    id: "testimonial-placeholder-3",
    quote:
      "Add an approved testimonial from a real client. Replace this placeholder with their exact words before publishing.",
    name: "Client name",
    role: "Client role or business",
    placeholder: true,
  },
  {
    id: "testimonial-placeholder-4",
    quote:
      "Add an approved testimonial from a real client. Replace this placeholder with their exact words before publishing.",
    name: "Client name",
    role: "Client role or business",
    placeholder: true,
  },
  {
    id: "testimonial-placeholder-5",
    quote:
      "Add an approved testimonial from a real client. Replace this placeholder with their exact words before publishing.",
    name: "Client name",
    role: "Client role or business",
    placeholder: true,
  },
  {
    id: "testimonial-placeholder-6",
    quote:
      "Add an approved testimonial from a real client. Replace this placeholder with their exact words before publishing.",
    name: "Client name",
    role: "Client role or business",
    placeholder: true,
  },
  {
    id: "testimonial-placeholder-7",
    quote:
      "Add an approved testimonial from a real client. Replace this placeholder with their exact words before publishing.",
    name: "Client name",
    role: "Client role or business",
    placeholder: true,
  },
  {
    id: "testimonial-placeholder-8",
    quote:
      "Add an approved testimonial from a real client. Replace this placeholder with their exact words before publishing.",
    name: "Client name",
    role: "Client role or business",
    placeholder: true,
  },
  {
    id: "testimonial-placeholder-9",
    quote:
      "Add an approved testimonial from a real client. Replace this placeholder with their exact words before publishing.",
    name: "Client name",
    role: "Client role or business",
    placeholder: true,
  },
];
