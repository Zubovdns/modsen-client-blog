import { notFound } from "next/navigation";

import { CategoryBanner } from "@components/category-banner/category-banner";
import { categories } from "@interfaces/category.interface";

import styles from "./page.module.scss";
import { CategoryPageProps } from "./page.type";

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  if (!Object.values(categories).includes(category)) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <CategoryBanner category={category} />
    </div>
  );
}
