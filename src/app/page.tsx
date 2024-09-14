import { HomeAboutUsBanner } from "@components/home-about-us-banner/home-about-us-banner";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeAboutUsBanner />
    </div>
  );
}
