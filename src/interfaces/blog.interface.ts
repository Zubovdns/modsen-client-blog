import { Author } from "@interfaces/author.interface";

import { Category } from "./category.interface";

export interface BlogContentBlock {
  type: "heading" | "paragraph";
  text: string;
}

export interface Blog {
  id: string;
  author: Author;
  publish_date: Date;
  category: Category;
  title: string;
  title_image: string;
  description: string;
  content: BlogContentBlock[];
}
