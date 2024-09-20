import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { getFeaturedPost } from "@/service/posts/get-featured-post";
import { Button } from "@components/button/button";
import { NavLink } from "@components/nav-link/nav-link";
import typography from "@styles/typography.module.scss";
import { formattedDate } from "@utils/formatDate";

import styles from "./blog-featured-banner.module.scss";

export const BlogFeaturedBanner = async () => {
  const t = await getTranslations("FeaturePost");
  const locale = await getLocale();

  const post = await getFeaturedPost();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={`${typography.cap}`}>
          {t("posted-on")}
          <span className={styles.category}>{post.category}</span>
        </p>
        <h1 className={`${typography.Display} ${styles.title}`}>
          {post.title}
        </h1>
        <p className={`${typography.body1} ${styles.metaInfo}`}>
          {t("by")}
          <NavLink className={styles.author} href={`/author/${post.author.id}`}>
            {post.author.name}
          </NavLink>
          {t("separator")}
          <span>{formattedDate(new Date(post.publish_date), locale)}</span>
        </p>
        <p className={`${typography.body1} ${styles.description}`}>
          {post.description}
        </p>
        <Button className={styles.button} href={`/blog/${post.id}`}>
          {t("button")}
        </Button>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt={t("banner-image.alt")}
          src={post.title_image}
          fill
          priority
        />
      </div>
    </div>
  );
};
