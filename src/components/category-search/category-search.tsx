import { getPostsByCategory } from "@/service/posts/get-posts-by-category";

import { CategorySearchItem } from "./category-search-item/category-search-item";
import styles from "./category-search.module.scss";
import { CategorySearchProps } from "./category-search.type";

export const CategorySearch = async ({ category }: CategorySearchProps) => {
  const posts = await getPostsByCategory(category, []);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {posts.map(({ id, title_image, title, description, category }) => (
          <CategorySearchItem
            key={id}
            id={id}
            image={title_image}
            title={title}
            description={description}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};
