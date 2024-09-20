import dynamic from "next/dynamic";

import { BlogFeaturedBanner } from "@components/blog-featured-banner/blog-featured-banner";
import { BlogListOfPosts } from "@components/blog-list-of-posts/blog-list-of-posts";

import styles from "../page.module.scss";

const CategorySelector = dynamic(() =>
  import("@components/category-selector/category-selector").then(
    (module) => module.CategorySelector,
  ),
);

const JoinOurTeamBanner = dynamic(() =>
  import("@components/join-our-team-banner/join-our-team-banner").then(
    (module) => module.JoinOurTeamBanner,
  ),
);

export default function Blog() {
  return (
    <div className={styles.page}>
      <BlogFeaturedBanner />
      <BlogListOfPosts />
      <CategorySelector />
      <JoinOurTeamBanner />
    </div>
  );
}
