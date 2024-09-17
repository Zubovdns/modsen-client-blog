import Image from "next/image";

import { categories } from "@/constants/categories.constant";
import typography from "@styles/typography.module.scss";

import styles from "./category-selector.module.scss";

export const CategorySelector = () => (
  <div className={styles.container}>
    <h3>Choose A Category</h3>
    <div className={styles.content}>
      {categories.map(({ name, icon, description }) => (
        <div className={styles.card} key={name}>
          <div className={styles.iconWrapper}>
            <Image src={icon.src} alt={icon.alt} />
          </div>
          <div className={styles.text}>
            <h4>{name}</h4>
            <p className={`${typography.body1} ${styles.description}`}>
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
