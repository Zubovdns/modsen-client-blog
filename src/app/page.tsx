import { FeaturedInBanner } from "@components/featured-in-banner/featured-in-banner";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <FeaturedInBanner />
    </div>
  );
}
