import Image from "next/image";
import { useTranslations } from "next-intl";

import { categories } from "@/constants/categories.constant";
import typography from "@styles/typography.module.scss";

import styles from "./category-selector.module.scss";

export const CategorySelector = () => {
  const t = useTranslations("CategorySelector");

  return (
    <div className={styles.container}>
      <h3>{t("title")}</h3>
      <div className={styles.content}>
        {categories.map(({ category, icon }) => (
          <div className={styles.card} key={category}>
            <div className={styles.iconWrapper}>
              <Image src={icon} alt={t(`${category}.icon.alt`)} />
            </div>
            <div className={styles.text}>
              <h4>{t(`${category}.title`)}</h4>
              <p className={`${typography.body1} ${styles.description}`}>
                {t(`${category}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
