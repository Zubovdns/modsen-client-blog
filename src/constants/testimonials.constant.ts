import { StaticImageData } from "next/image";

import Avatar1 from "@public/avatars/testimonials/testimonial-avatar-1.jpeg";
import Avatar2 from "@public/avatars/testimonials/testimonial-avatar-2.jpeg";
import Avatar3 from "@public/avatars/testimonials/testimonial-avatar-3.jpeg";

type Testimonial = {
  avatar: StaticImageData;
};

type Testimonials = {
  [key: string]: Testimonial;
};

export const testimonials: Testimonials = {
  "testimonial-1": {
    avatar: Avatar1,
  },
  "testimonial-2": {
    avatar: Avatar2,
  },
  "testimonial-3": {
    avatar: Avatar3,
  },
};
