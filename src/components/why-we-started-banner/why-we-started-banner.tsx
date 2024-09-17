import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "@components/button/button";
import BannerImage from "@public/images/why-we-started-image.png";
import typography from "@styles/typography.module.scss";

import styles from "./why-we-started-banner.module.scss";

export const WhyWeStartedBanner = () => {
  const t = useTranslations("WhyWeStartedBanner");

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={BannerImage}
          alt={t("image.alt")}
          className={styles.image}
          fill
        />
      </div>

      <div className={styles.content}>
        <p className={styles.header}>{t("header")}</p>
        <div className={styles.text}>
          <h2>{t("title")}</h2>
          <p className={`${typography.body01}`}>{t("description")}</p>
        </div>
        <Button>{t("button.title")}</Button>
      </div>
    </div>
  );
};
