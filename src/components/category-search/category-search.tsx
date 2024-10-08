/* eslint-disable no-nested-ternary */
"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import classNames from "classnames";

import { categories } from "@/constants/categories.constant";
import { tags } from "@/constants/tags.constatn";
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
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [debouncedTagValue, setDebouncedTagValue] = useState(tagValue);

  const t = useTranslations("CategoryPage");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTagValue(tagValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [tagValue]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getPostsByCategory(
          category,
          [...selectedTags, debouncedTagValue],
          window.location.origin,
        );
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to load posts: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category, selectedTags, debouncedTagValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag],
    );
  };

  const handleTagSelected = (tag: tags) => () => {
    toggleTag(tag);
  };

  const isSelected = (tag: string) => selectedTags.includes(tag);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {loading ? (
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        ) : posts.length === 0 ? (
          <div className={styles.placeholder}>
            <p className={typography.Heading3}>{t("placeholder.message")}</p>
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
            placeholder={t("tags.placeholder")}
            className={styles.search}
          />
        </div>
        <div className={styles.categoryList}>
          <h2 className={typography.Heading2}>{t("categories.title")}</h2>
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
        <div className={styles.categoryList}>
          <h2 className={typography.Heading2}>{t("tags.title")}</h2>
          <div className={styles.tagList}>
            {Object.values(tags).map((tag) => (
              <div
                key={tag}
                className={classNames(
                  typography.body2,
                  styles.tagItem,
                  isSelected(tag) && styles.selectedTag,
                )}
                onClick={handleTagSelected(tag)}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
