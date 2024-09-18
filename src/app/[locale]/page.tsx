import { FeaturedInBanner } from "@components/featured-in-banner/featured-in-banner";
import { HomeAboutUsBanner } from "@components/home-about-us-banner/home-about-us-banner";
import { HomeBanner } from "@components/home-banner/home-banner";
import { JoinOurTeamBanner } from "@components/join-our-team-banner/join-our-team-banner";
import { PostsBanner } from "@components/posts-banner/posts-banner";
import { TestimonialsBanner } from "@components/testimonials-banner/testimonials-banner";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeBanner />
      <PostsBanner />
      <HomeAboutUsBanner />
      <FeaturedInBanner />
      <TestimonialsBanner />
      <JoinOurTeamBanner />
    </div>
  );
}
