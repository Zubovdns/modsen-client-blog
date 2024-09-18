import { StaticImageData } from "next/image";

import Avatar1 from "@public/avatars/testimonials/testimonial-avatar-1.jpeg";
import Avatar2 from "@public/avatars/testimonials/testimonial-avatar-2.jpeg";
import Avatar3 from "@public/avatars/testimonials/testimonial-avatar-3.jpeg";

type Testimonial = {
  text: string;
  name: string;
  location: string;
  avatar: StaticImageData;
};

type Testimonials = {
  [key: string]: Testimonial;
};

export const testimonials: Testimonials = {
  "testimonial-1": {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jonathan Vallem",
    location: "New York, USA",
    avatar: Avatar1,
  },
  "testimonial-2": {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jonathan Vallem",
    location: "New York, USA",
    avatar: Avatar2,
  },
  "testimonial-3": {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jonathan Vallem",
    location: "New York, USA",
    avatar: Avatar3,
  },
};
