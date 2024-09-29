import Image from "next/image";
import classNames from "classnames";

import BannerImage from "@public/images/why-we-started-image.png";
import typography from "@styles/typography.module.scss";

import styles from "./page.module.scss";

export default function AboutUs() {
  return (
    <div className={styles.page}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerTop}>
          <div className={styles.bannerTopHeader}>
            <p className={typography.cap3}>About us</p>
            <h1 className={typography.Heading1}>
              We are a team of content writers who share their learnings
            </h1>
          </div>
          <div className={styles.bannerTopDescription}>
            <p className={classNames(styles.body1, styles.bannerDescription)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className={styles.banner}>
          <div className={styles.overview}>
            <Image
              className={styles.image}
              src={BannerImage}
              alt="Banner image"
              fill
            />
            <div className={styles.statistics}>
              <div className={styles.statisticsItem}>
                <h1 className={typography.Display}>12+</h1>
                <p className={typography.body1}>Blogs Published</p>
              </div>
              <div className={styles.statisticsItem}>
                <h1 className={typography.Display}>18K+</h1>
                <p className={typography.body1}>Views on Finsweet</p>
              </div>
              <div className={styles.statisticsItem}>
                <h1 className={typography.Display}>30K+</h1>
                <p className={typography.body1}>Total active Users</p>
              </div>
            </div>
            <div className={styles.topBar}>
              <div className={styles.purpleBar} />
              <div className={styles.yellowBar} />
            </div>
          </div>
          <div className={styles.missionVision}>
            <div className={`${styles.bannerSection}`}>
              <p className={`${typography.cap} ${styles.bannerHeading}`}>
                Our mission
              </p>
              <h2 className={`${typography.Heading2}`}>
                Creating valuable content for creatives all around the world
              </h2>
              <p className={`${typography.body1} ${styles.bannerDescription}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>

            <div className={`${styles.bannerSection}`}>
              <p className={`${typography.cap} ${styles.bannerHeading}`}>
                Our Vision
              </p>
              <h3 className={`${typography.Heading3}`}>
                A platform that empowers individuals to improve
              </h3>
              <p className={`${typography.body1} ${styles.bannerDescription}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
