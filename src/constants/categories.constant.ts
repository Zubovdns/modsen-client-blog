import { category } from "@interfaces/blog.interface";
import BusinessIcon from "@public/icons/categories/business-icon.svg";
import EconomyIcon from "@public/icons/categories/economy-icon.svg";
import StartupIcon from "@public/icons/categories/startup-icon.svg";
import TechnologyIcon from "@public/icons/categories/technology-icon.svg";

export const categories: {
  category: category;
  icon: string;
}[] = [
  {
    category: "startup",
    icon: StartupIcon,
  },
  {
    category: "business",
    icon: BusinessIcon,
  },
  {
    category: "economy",
    icon: EconomyIcon,
  },
  {
    category: "technology",
    icon: TechnologyIcon,
  },
];
