import Image from "next/image";
import classNames from "classnames";

import { JoinOurTeamBanner } from "@components/join-our-team-banner/join-our-team-banner";
import { ListOfAuthors } from "@components/list-of-authors/list-of-authors";
import PurpleShape from "@public/icons/shapes/purple-shape.svg";
import YellowShape from "@public/icons/shapes/yellow-shape.svg";
import ContentImage1 from "@public/images/about-us-1-image.png";
import ContentImage2 from "@public/images/about-us-2-image.png";
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
      <div className={styles.content}>
        <div className={styles.contentDescription}>
          <h2 className={typography.Heading2}>Our team of creatives</h2>
          <h4 className={typography.Heading4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h4>
          <p className={typography.body1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className={styles.contentImageWrapper}>
          <Image
            src={ContentImage1}
            alt="Content image 1"
            className={styles.contentImage}
            fill
          />
          <Image
            src={YellowShape}
            alt="Yellow shape"
            className={styles.yellowShape}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentImageWrapper}>
          <Image
            src={ContentImage2}
            alt="Content image 2"
            className={styles.contentImage}
            fill
          />
          <Image
            src={PurpleShape}
            alt="Purple shape"
            className={styles.purpleShape}
          />
        </div>
        <div className={styles.contentDescription}>
          <h2 className={typography.Heading2}>Why we started this Blog</h2>
          <h4 className={typography.Heading4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h4>
          <p className={typography.body1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
      </div>
      <ListOfAuthors />
      <JoinOurTeamBanner />
    </div>
  );
}
