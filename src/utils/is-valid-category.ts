import { categories, Category } from "@interfaces/category.interface";

export const isValidCategory = (category: string): category is Category =>
  Object.values(categories).includes(category as Category);
