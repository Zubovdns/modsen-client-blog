"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import {
  getPostsByPage,
  PostsReceivedData,
} from "@/service/posts/get-posts-by-page";
import { Loader } from "@components/loader/loader";
import { Link } from "@i18n/routing";
import typography from "@styles/typography.module.scss";

import styles from "./blog-list-of-posts.module.scss";

const START_PAGE = 1;

export const BlogListOfPosts = () => {
  const t = useTranslations("PostsBanner");

  const [page, setPage] = useState(START_PAGE);
  const [data, setData] = useState<PostsReceivedData>({
    posts: [],
    hasMore: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const data = await getPostsByPage(page, window.location.origin);

      setData(data);
      setIsLoading(false);
      if (titleRef.current) {
        titleRef.current.scrollIntoView({ behavior: "smooth" });
      }
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
      <h1 ref={titleRef} className={`${typography.Heading1} ${styles.title}`}>
        {t("all-posts.title")}
      </h1>
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <div className={styles.list}>
          {data.posts.map(
            ({ category, title, description, title_image, id }) => (
              <Link key={id} className={styles.card} href={`/blog/${id}`}>
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
              </Link>
            ),
          )}
        </div>
      )}
      <div className={styles.navContainer}>
        <button
          className={`${typography.Heading4} ${styles.navButton}`}
          onClick={() => loadPage(page - 1)}
          disabled={page <= 1}
        >
          {t("prev")}
        </button>
        <button
          className={`${typography.Heading4} ${styles.navButton}`}
          onClick={() => loadPage(page + 1)}
          disabled={!data.hasMore}
        >
          {t("next")}
        </button>
      </div>
    </div>
  );
};
