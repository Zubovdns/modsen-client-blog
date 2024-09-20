import { BlogPost } from "@components/blog-post/blog-post";
import { JoinOurTeamBanner } from "@components/join-our-team-banner/join-our-team-banner";

import styles from "./page.module.scss";
import { BlogPageProps } from "./types";

export default function BlogPage({ params }: BlogPageProps) {
  return (
    <div className={styles.page}>
      <BlogPost id={params.id} />
      <JoinOurTeamBanner />
    </div>
  );
}
