import { BlogFeaturedBanner } from "@components/blog-featured-banner/blog-featured-banner";

import styles from "../page.module.scss";

export default function Blog() {
  return (
    <div className={styles.page}>
      <BlogFeaturedBanner />
    </div>
  );
}
