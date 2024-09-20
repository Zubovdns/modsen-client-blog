import Image from "next/image";
import { getLocale } from "next-intl/server";

import { getPostById } from "@/service/posts/get-post-by-id";
import typography from "@styles/typography.module.scss";
import { formattedDate } from "@utils/formatDate";

import styles from "./blog-post.module.scss";
import { BlogPostProps } from "./blog-post.types";

export const BlogPost = async ({ id }: BlogPostProps) => {
  const post = await getPostById(id);
  const locale = await getLocale();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.avatarWrapper}>
            <Image
              src={post.author.avatar.src}
              alt={post.author.avatar.alt}
              className={styles.avatar}
              fill
            />
          </div>
          <div className={styles.profileText}>
            <h3 className={`${typography.Heading3} ${styles.authorName}`}>
              {post.author.name}
            </h3>
            <p className={`${typography.body1} ${styles.publishDate}`}>
              {formattedDate(post.publish_date, locale)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
