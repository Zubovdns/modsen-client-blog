"use client";

import { useEffect, useState } from "react";

import { categories } from "@/constants/categories.constant";
import { getPostsByCategory } from "@/service/posts/get-posts-by-category";
import { FormInput } from "@components/form-input/form-input";
import { Loader } from "@components/loader/loader";
import { Blog } from "@interfaces/blog.interface";
import typography from "@styles/typography.module.scss";

import { CategoryItem } from "./category-item/category-item";
import { CategoryPostItem } from "./category-post-item/category-post-item";
import styles from "./category-search.module.scss";
import { CategorySearchProps } from "./category-search.type";

export const CategorySearch = ({ category }: CategorySearchProps) => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [tagValue, setTagValue] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getPostsByCategory(category, []);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to load posts: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {loading ? (
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        ) : (
          posts.map(({ id, title_image, title, description, category }) => (
            <CategoryPostItem
              key={id}
              id={id}
              image={title_image}
              title={title}
              description={description}
              category={category}
            />
          ))
        )}
      </div>
      <div className={styles.filterPanel}>
        <div className={styles.searchContainer}>
          <FormInput
            onChange={handleInputChange}
            type="text"
            value={tagValue}
            placeholder="Search for tag..."
            className={styles.search}
          />
        </div>
        <div className={styles.categoryContainer}>
          <h2 className={typography.Heading2}>Categories</h2>
          <div className={styles.categoryList}>
            {Object.entries(categories).map(([categoryKey, { icon }]) => (
              <CategoryItem
                key={categoryKey}
                categoryKey={categoryKey}
                icon={icon}
              />
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
