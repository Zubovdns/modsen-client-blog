import { HomeBanner } from "@components/home-banner/home-banner";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeBanner />
    </div>
  );
}
