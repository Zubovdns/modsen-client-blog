import Image from "next/image";

import { Button } from "@components/button/button";
import BannerImage from "@public/images/why-we-started-image.png";
import typography from "@styles/typography.module.scss";

import styles from "./why-we-started-banner.module.scss";

export const WhyWeStartedBanner = () => (
  <div className={styles.container}>
    <div className={styles.imageWrapper}>
      <Image
        src={BannerImage}
        alt="Why we started image"
        className={styles.image}
        fill
      />
    </div>

    <div className={styles.content}>
      <p className={styles.header}>Why We Started</p>
      <div className={styles.text}>
        <h2>It started out as a simple idea and evolved into our passion</h2>
        <p className={`${typography.body01}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Button>{"Discover our story >"}</Button>
    </div>
  </div>
);
