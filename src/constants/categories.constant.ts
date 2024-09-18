import { category } from "@interfaces/blog.interface";
import BusinessIcon from "@public/icons/categories/business-icon.svg";
import EconomyIcon from "@public/icons/categories/economy-icon.svg";
import StartupIcon from "@public/icons/categories/startup-icon.svg";
import TechnologyIcon from "@public/icons/categories/technology-icon.svg";

export const categories: Record<category, { icon: string }> = {
  startup: {
    icon: StartupIcon,
  },
  business: {
    icon: BusinessIcon,
  },
  economy: {
    icon: EconomyIcon,
  },
  technology: {
    icon: TechnologyIcon,
  },
};
