import Image from "next/image";
import { useLocale, useTranslations } from "next-intl"; // добавляем useLocale

import { title_blog } from "@/mocks/blogs-mock";
import { formattedDate } from "@/utils/formatDate";
import { Button } from "@components/button/button";
import { NavLink } from "@components/nav-link/nav-link";
import typography from "@styles/typography.module.scss";

import styles from "./home-banner.module.scss";

export const HomeBanner = () => {
  const t = useTranslations("FeaturePost");
  const locale = useLocale(); // Получаем текущую локаль

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        alt={t("banner-image.alt")}
        src={title_blog.title_image}
        fill
        priority
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <p className={`${typography.body01} ${styles.header}`}>
          {t("posted-on")}
          <span className={styles.category}>{title_blog.category}</span>
        </p>
        <h1 className={styles.title}>{title_blog.title}</h1>
        <p className={`${typography.body01} ${styles.metaInfo}`}>
          {t("by")}
          <NavLink
            className={styles.author}
            href={`/author/${title_blog.author.id}`}
          >
            {title_blog.author.name}
          </NavLink>
          {t("separator")}
          <span>
            {formattedDate(new Date(title_blog.publish_date), locale)}
          </span>
        </p>
        <p className={`${typography.body01} ${styles.description}`}>
          {title_blog.description}
        </p>
        <Button className={styles.button}>{t("button")}</Button>
      </div>
    </div>
  );
};
