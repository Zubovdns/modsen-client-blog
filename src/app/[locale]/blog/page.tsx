import { BlogFeaturedBanner } from "@components/blog-featured-banner/blog-featured-banner";
import { BlogListOfPosts } from "@components/blog-list-of-posts/blog-list-of-posts";

import styles from "../page.module.scss";

export default function Blog() {
  return (
    <div className={styles.page}>
      <BlogFeaturedBanner />
      <BlogListOfPosts />
    </div>
  );
}
