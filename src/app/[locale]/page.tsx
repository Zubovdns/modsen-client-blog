import dynamic from "next/dynamic";

import { HomeBanner } from "@components/home-banner/home-banner";

import styles from "./page.module.scss";

const PostsBanner = dynamic(() =>
  import("@components/posts-banner/posts-banner").then(
    (mod) => mod.PostsBanner,
  ),
);
const HomeAboutUsBanner = dynamic(() =>
  import("@components/home-about-us-banner/home-about-us-banner").then(
    (mod) => mod.HomeAboutUsBanner,
  ),
);
const CategorySelector = dynamic(() =>
  import("@components/category-selector/category-selector").then(
    (mod) => mod.CategorySelector,
  ),
);
const WhyWeStartedBanner = dynamic(() =>
  import("@components/why-we-started-banner/why-we-started-banner").then(
    (mod) => mod.WhyWeStartedBanner,
  ),
);
const ListOfAuthors = dynamic(() =>
  import("@components/list-of-authors/list-of-authors").then(
    (mod) => mod.ListOfAuthors,
  ),
);
const FeaturedInBanner = dynamic(() =>
  import("@components/featured-in-banner/featured-in-banner").then(
    (mod) => mod.FeaturedInBanner,
  ),
);
const TestimonialsBanner = dynamic(() =>
  import("@components/testimonials-banner/testimonials-banner").then(
    (mod) => mod.TestimonialsBanner,
  ),
);
const JoinOurTeamBanner = dynamic(() =>
  import("@components/join-our-team-banner/join-our-team-banner").then(
    (mod) => mod.JoinOurTeamBanner,
  ),
);

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeBanner />
      <PostsBanner />
      <HomeAboutUsBanner />
      <CategorySelector />
      <WhyWeStartedBanner />
      <ListOfAuthors />
      <FeaturedInBanner />
      <TestimonialsBanner />
      <JoinOurTeamBanner />
    </div>
  );
}
