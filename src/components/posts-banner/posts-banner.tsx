import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { getFeaturedPost } from "@/service/posts/get-featured-post";
import { getLastFourPosts } from "@/service/posts/get-last-four-posts";
import { Button } from "@components/button/button";
import { NavLink } from "@components/nav-link/nav-link";
import typography from "@styles/typography.module.scss";
import { formattedDate } from "@utils/formatDate";

import styles from "./posts-banner.module.scss";

export const PostsBanner = async () => {
  const t = await getTranslations("PostsBanner");
  const locale = await getLocale();

  const data = await getLastFourPosts();
  const featuredPost = await getFeaturedPost();

  return (
    <div className={styles.container}>
      <div className={styles.featuredContainer}>
        <div className={styles.featuredHeader}>
          <h3 className={typography.Heading2}>{t("feature-post.title")}</h3>
        </div>
        <div className={styles.featuredPost}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              alt={t("feature-post.image.alt")}
              src={featuredPost.title_image}
              fill
            />
          </div>
          <div className={styles.featuredContent}>
            <p className={`${typography.label} ${styles.metaInfo}`}>
              {t("by")}
              <NavLink
                className={styles.author}
                href={`/author/${featuredPost.author.id}`}
              >
                {featuredPost.author.name}
              </NavLink>
              {t("separator")}
              <span>{formattedDate(featuredPost.publish_date, locale)}</span>
            </p>
            <h4 className={typography.Heading3}>{featuredPost.title}</h4>
            <p className={`${typography.body1} ${styles.description}`}>
              {featuredPost.description}
            </p>
          </div>
          <Button>{t("feature-post.button.title")}</Button>
        </div>
      </div>
      <div className={styles.allContainer}>
        <div className={styles.allHeader}>
          <h3 className={typography.Heading2}>{t("all-posts.title")}</h3>
          <NavLink
            className={`${typography.body1} ${styles.link}`}
            href={t("all-posts.link.href")}
          >
            {t("all-posts.link.title")}
          </NavLink>
        </div>
        <div className={styles.allPosts}>
          {data.posts.map(({ id, publish_date, author, title }) => (
            <div key={id} className={styles.allItem}>
              <p className={`${typography.label} ${styles.metaInfo}`}>
                {t("by")}
                <NavLink
                  className={styles.author}
                  href={`/author/${author.id}`}
                >
                  {author.name}
                </NavLink>
                {t("separator")}
                <span>{formattedDate(publish_date, locale)}</span>
              </p>
              <h5 className={typography.Heading4}>{title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
