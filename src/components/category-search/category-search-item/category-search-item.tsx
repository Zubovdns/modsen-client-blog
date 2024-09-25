import Image from "next/image";

import { Link } from "@i18n/routing";
import typography from "@styles/typography.module.scss";

import styles from "./category-search-item.module.scss";
import { CategorySearchItemProps } from "./category-search-item.type";

export const CategorySearchItem = ({
  category,
  description,
  id,
  image,
  title,
}: CategorySearchItemProps) => (
  <Link className={styles.card} href={`/blog/${id}`}>
    <div className={styles.imageWrapper}>
      <Image
        className={styles.image}
        alt={`Post image ${id}`}
        src={image}
        fill
      />
    </div>
    <div className={styles.content}>
      <p className={typography.cap}>{category}</p>
      <div className={styles.text}>
        <h2 className={typography.Heading2}>{title}</h2>
        <p className={typography.body1}>{description}</p>
      </div>
    </div>
  </Link>
);
