import Image from "next/image";

import { title_blog } from "@/mocks/blogs-mock";
import { formattedDate } from "@/utils/formatDate";
import { Button } from "@components/button/button";
import { NavLink } from "@components/nav-link/nav-link";
import typography from "@styles/typography.module.scss";

import { BUTTON, BY, POSTED_ON, SEPARATOR } from "./constants";
import styles from "./home-banner.module.scss";

export const HomeBanner = async () => (
  <div className={styles.container}>
    <Image
      className={styles.image}
      alt="Home banner image"
      src={title_blog.title_image}
      fill
      priority
    />
    <div className={styles.overlay}></div>
    <div className={styles.content}>
      <p className={`${typography.body01} ${styles.header}`}>
        {POSTED_ON}
        <span className={styles.category}>{title_blog.category}</span>
      </p>
      <h1 className={styles.title}>{title_blog.title}</h1>
      <p className={`${typography.body01} ${styles.metaInfo}`}>
        {BY}
        <NavLink
          className={styles.author}
          href={`/author/${title_blog.author.id}`}
        >
          {title_blog.author.name}
        </NavLink>
        {SEPARATOR}
        <span>{formattedDate(title_blog.publish_date)}</span>
      </p>
      <p className={`${typography.body01} ${styles.description}`}>
        {title_blog.description}
      </p>
      <Button className={styles.button}>{BUTTON}</Button>
    </div>
  </div>
);
