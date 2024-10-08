import dynamic from "next/dynamic";

import { HomeBanner } from "@components/home-banner/home-banner";
import { LazyLoad } from "@components/lazy-load/lazy-load";

import styles from "./page.module.scss";

const PostsBanner = dynamic(
  () =>
    import("@components/posts-banner/posts-banner").then(
      (module) => module.PostsBanner,
    ),
  { ssr: false },
);
const HomeAboutUsBanner = dynamic(
  () =>
    import("@components/home-about-us-banner/home-about-us-banner").then(
      (module) => module.HomeAboutUsBanner,
    ),
  { ssr: false },
);
const CategorySelector = dynamic(
  () =>
    import("@components/category-selector/category-selector").then(
      (module) => module.CategorySelector,
    ),
  { ssr: false },
);
const WhyWeStartedBanner = dynamic(
  () =>
    import("@components/why-we-started-banner/why-we-started-banner").then(
      (module) => module.WhyWeStartedBanner,
    ),
  { ssr: false },
);
const ListOfAuthors = dynamic(
  () =>
    import("@components/list-of-authors/list-of-authors").then(
      (module) => module.ListOfAuthors,
    ),
  { ssr: false },
);
const FeaturedInBanner = dynamic(
  () =>
    import("@components/featured-in-banner/featured-in-banner").then(
      (module) => module.FeaturedInBanner,
    ),
  { ssr: false },
);
const TestimonialsBanner = dynamic(
  () =>
    import("@components/testimonials-banner/testimonials-banner").then(
      (module) => module.TestimonialsBanner,
    ),
  { ssr: false },
);
const JoinOurTeamBanner = dynamic(
  () =>
    import("@components/join-our-team-banner/join-our-team-banner").then(
      (module) => module.JoinOurTeamBanner,
    ),
  { ssr: false },
);

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeBanner />

      <LazyLoad>
        <PostsBanner />
      </LazyLoad>

      <LazyLoad>
        <HomeAboutUsBanner />
      </LazyLoad>

      <LazyLoad>
        <CategorySelector />
      </LazyLoad>

      <LazyLoad>
        <WhyWeStartedBanner />
      </LazyLoad>

      <LazyLoad>
        <ListOfAuthors />
      </LazyLoad>

      <LazyLoad>
        <FeaturedInBanner />
      </LazyLoad>

      <LazyLoad>
        <TestimonialsBanner />
      </LazyLoad>

      <LazyLoad>
        <JoinOurTeamBanner />
      </LazyLoad>
    </div>
  );
}
