import { category } from "@interfaces/blog.interface";
import BusinessIcon from "@public/icons/categories/business-icon.svg";
import EconomyIcon from "@public/icons/categories/economy-icon.svg";
import StartupIcon from "@public/icons/categories/startup-icon.svg";
import TechnologyIcon from "@public/icons/categories/technology-icon.svg";

export const categories: {
  name: category;
  icon: {
    src: string;
    alt: string;
  };
  description: string;
}[] = [
  {
    name: "Startup",
    icon: {
      src: StartupIcon,
      alt: "Startup icon",
    },
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    name: "Business",
    icon: {
      src: BusinessIcon,
      alt: "Business icon",
    },
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    name: "Economy",
    icon: {
      src: EconomyIcon,
      alt: "Economy icon",
    },
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    name: "Technology",
    icon: {
      src: TechnologyIcon,
      alt: "Technology icon",
    },
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
];
