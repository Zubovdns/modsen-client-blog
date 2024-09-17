import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { featured_post, posts_mock } from "@/mocks/posts-mock";
import { Button } from "@components/button/button";
import { NavLink } from "@components/nav-link/nav-link";
import typography from "@styles/typography.module.scss";
import { formattedDate } from "@utils/formatDate";

import styles from "./posts-banner.module.scss";

export const PostsBanner = () => {
  const t = useTranslations("PostsBanner");
  const locale = useLocale();

  // ! добавить api
  const posts = posts_mock.slice(0, 4);

  return (
    <div className={styles.container}>
      <div className={styles.featuredContainer}>
        <div className={styles.featuredHeader}>
          <h3>{t("feature-post.title")}</h3>
        </div>
        <div className={styles.featuredPost}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              alt={t("feature-post.image.alt")}
              src={featured_post.title_image}
              fill
            />
          </div>
          <div className={styles.featuredContent}>
            <p className={`${typography.body01} ${styles.metaInfo}`}>
              {t("by")}
              <NavLink
                className={styles.author}
                href={`/author/${featured_post.author.id}`}
              >
                {featured_post.author.name}
              </NavLink>
              {t("separator")}
              <span>{formattedDate(featured_post.publish_date, locale)}</span>
            </p>
            <h4>{featured_post.title}</h4>
            <p className={`${typography.body01} ${styles.description}`}>
              {featured_post.description}
            </p>
          </div>
          <Button>{t("feature-post.button.title")}</Button>
        </div>
      </div>
      <div className={styles.allContainer}>
        <div className={styles.allHeader}>
          <h3>{t("all-posts.title")}</h3>
          <NavLink
            className={`${typography.body01} ${styles.link}`}
            href={t("all-posts.link.href")}
          >
            {t("all-posts.link.title")}
          </NavLink>
        </div>
        <div className={styles.allPosts}>
          {posts.map(({ id, publish_date, author, title }) => (
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
              <h5>{title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
