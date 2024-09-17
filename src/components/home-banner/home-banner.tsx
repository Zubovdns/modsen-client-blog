import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { last_post } from "@/mocks/posts-mock";
import { formattedDate } from "@/utils/formatDate";
import { Button } from "@components/button/button";
import { NavLink } from "@components/nav-link/nav-link";
import typography from "@styles/typography.module.scss";

import styles from "./home-banner.module.scss";

export const HomeBanner = () => {
  const t = useTranslations("FeaturePost");
  const locale = useLocale();

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        alt={t("banner-image.alt")}
        src={last_post.title_image}
        fill
        priority
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <p className={`${typography.cap}`}>
          {t("posted-on")}
          <span className={styles.category}>{last_post.category}</span>
        </p>
        <h1 className={`${typography.Display} ${styles.title}`}>
          {last_post.title}
        </h1>
        <p className={`${typography.body1} ${styles.metaInfo}`}>
          {t("by")}
          <NavLink
            className={styles.author}
            href={`/author/${last_post.author.id}`}
          >
            {last_post.author.name}
          </NavLink>
          {t("separator")}
          <span>{formattedDate(new Date(last_post.publish_date), locale)}</span>
        </p>
        <p className={`${typography.body1} ${styles.description}`}>
          {last_post.description}
        </p>
        <Button className={styles.button}>{t("button")}</Button>
      </div>
    </div>
  );
};
