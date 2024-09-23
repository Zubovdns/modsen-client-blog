import { notFound } from "next/navigation";

import { CategoryBanner } from "@components/category-banner/category-banner";
import { CategorySearch } from "@components/category-search/category-search";
import { isValidCategory } from "@utils/is-valid-category";

import styles from "./page.module.scss";
import { CategoryPageProps } from "./page.type";

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  if (!isValidCategory(category)) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <CategoryBanner category={category} />
      <CategorySearch category={category} />
    </div>
  );
}
