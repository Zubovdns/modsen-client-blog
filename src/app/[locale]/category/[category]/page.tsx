import { notFound } from "next/navigation";

import { CategoryBanner } from "@components/category-banner/category-banner";
import { Category } from "@interfaces/category.interface"; // Импортируем тип Category

import styles from "./page.module.scss";
import { CategoryPageProps } from "./page.type";

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  if (!["startup", "business", "economy", "technology"].includes(category)) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <CategoryBanner category={category as Category} />
    </div>
  );
}
