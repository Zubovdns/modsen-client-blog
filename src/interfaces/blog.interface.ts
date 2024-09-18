import { Author } from "@interfaces/author.interface";

export type category = "startup" | "business" | "economy" | "technology";

export interface Blog {
  id: string;

  author: Author;
  publish_date: Date;
  category: category;

  title: string;
  title_image: string;
  description: string;

  content: string;
}
