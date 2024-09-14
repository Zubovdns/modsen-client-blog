import { NavLink } from "@components/nav-link/nav-link";
import typography from "@styles/typography.module.scss";

import {
  ABOUT_US_DESCRIPTION,
  ABOUT_US_HEADING,
  ABOUT_US_TITLE,
  OUR_MISSION_DESCRIPTION,
  OUR_MISSION_HEADING,
  OUR_MISSION_TITLE,
  READ_MORE,
} from "./constants";
import styles from "./home-about-us-banner.module.scss";

export const HomeAboutUsBanner = () => (
  <div className={styles.container}>
    <div className={styles.topBar}>
      <div className={styles.yellowBar} />
      <div className={styles.purpleBar} />
    </div>

    <div className={styles.content}>
      <div className={`${styles.section}`}>
        <p className={`${typography.body01} ${styles.heading}`}>
          {ABOUT_US_HEADING}
        </p>
        <h3 className={styles.title}>{ABOUT_US_TITLE}</h3>
        <p className={`${typography.body01} ${styles.description}`}>
          {ABOUT_US_DESCRIPTION}
        </p>
        <NavLink href="/about-us" className={styles.link}>
          {READ_MORE}
        </NavLink>
      </div>

      <div className={`${styles.section}`}>
        <p className={`${typography.body01} ${styles.heading}`}>
          {OUR_MISSION_HEADING}
        </p>
        <h4 className={styles.title}>{OUR_MISSION_TITLE}</h4>
        <p className={`${typography.body01} ${styles.description}`}>
          {OUR_MISSION_DESCRIPTION}
        </p>
      </div>
    </div>
  </div>
);
