import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { getRelatedPosts } from "@/service/posts/get-related-posts";
import { NavLink } from "@components/nav-link/nav-link";
import { Link } from "@i18n/routing";
import typography from "@styles/typography.module.scss";
import { formattedDate } from "@utils/formatDate";

import styles from "./related-posts.module.scss";
import { RelatedPostsProps } from "./related-posts.type";

export const RelatedPosts = async ({ id }: RelatedPostsProps) => {
  const t = await getTranslations("PostsBanner");
  const locale = await getLocale();

  const data = await getRelatedPosts(id);

  return (
    <div className={styles.container}>
      <h2 className={typography.Heading2}>{t("related-posts-title")}</h2>
      <div className={styles.content}>
        {data.posts.map(({ id, title_image, author, publish_date }) => (
          <Link className={styles.card} key={id} href={`/blog/${id}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={title_image}
                alt="Related post image"
                className={styles.image}
                fill
              />
            </div>
            <p className={`${typography.body1} ${styles.metaInfo}`}>
              {t("by")}
              <NavLink className={styles.author} href={`/author/${author.id}`}>
                {author.name}
              </NavLink>
              {t("separator")}
              <span>{formattedDate(new Date(publish_date), locale)}</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
