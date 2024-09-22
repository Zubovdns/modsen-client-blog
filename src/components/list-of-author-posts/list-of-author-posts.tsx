import Image from "next/image";
import { getTranslations } from "next-intl/server";
import classNames from "classnames";

import { getPostsByAuthorId } from "@/service/posts/get-posts-by-author-id";
import { Link } from "@i18n/routing";
import typography from "@styles/typography.module.scss";

import styles from "./list-of-author-posts.module.scss";
import { ListOfAuthorPostsProps } from "./list-of-author-posts.type";

export const ListOfAuthorPosts = async ({ id }: ListOfAuthorPostsProps) => {
  const t = await getTranslations("AuthorPosts");

  const posts = await getPostsByAuthorId(id);

  return (
    <div className={styles.container}>
      <h1 className={classNames(typography.Heading1, styles.title)}>
        {t("title")}
      </h1>
      <div className={styles.list}>
        {posts.map(({ id, title_image, title, category, description }) => (
          <Link className={styles.card} key={id} href={`/blog/${id}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={title_image}
                alt={`${title} image`}
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <p className={classNames(typography.cap, styles.category)}>
                {category}
              </p>
              <h2 className={typography.Heading2}>{title}</h2>
              <p className={classNames(typography.body1, styles.description)}>
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
