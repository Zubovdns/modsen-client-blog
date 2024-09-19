"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { getPostsByPage } from "@/service/posts/get-posts-by-page";
import { Blog } from "@interfaces/blog.interface";
import typography from "@styles/typography.module.scss";

import styles from "./blog-list-of-posts.module.scss";

export const BlogListOfPosts = () => {
  const t = useTranslations("PostsBanner");

  const [page, setPage] = useState(1);
  const [data, setData] = useState<{
    posts: Blog[];
    hasMore: boolean;
  }>({
    posts: [],
    hasMore: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const data = await getPostsByPage(page);
      setData(data);
      setIsLoading(false);
    };
    fetchPosts();
  }, [page]);

  const loadPage = async (page: number) => {
    const newData = await getPostsByPage(page);
    setData(newData);
    setPage(page);
  };

  return (
    <div className={styles.container}>
      <h1 className={`${typography.Heading1} ${styles.title}`}>
        {t("all-posts.title")}
      </h1>
      <div className={styles.list}>
        {data.posts.map(({ category, title, description, title_image, id }) => (
          <div key={id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                alt={`Post image ${id}`}
                src={title_image}
                fill
              />
            </div>
            <div className={styles.content}>
              <p className={typography.cap}>{category}</p>
              <div className={styles.text}>
                <h2 className={typography.Heading2}>{title}</h2>
                <p className={typography.body1}>{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.navContainer}>
        <button
          className={typography.Heading4}
          onClick={() => loadPage(page - 1)}
          disabled={page <= 1}
        >
          {"< Prev"}
        </button>
        <button
          className={typography.Heading4}
          onClick={() => loadPage(page + 1)}
          disabled={!data.hasMore}
        >
          {"Next >"}
        </button>
      </div>
    </div>
  );
};
