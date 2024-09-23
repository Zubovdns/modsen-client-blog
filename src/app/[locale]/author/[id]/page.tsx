import { AuthorBanner } from "@components/author-banner/author-banner";

import styles from "./page.module.scss";
import { AuthorProps } from "./types";

export default function Author({ params }: AuthorProps) {
  return (
    <div className={styles.page}>
      <AuthorBanner id={params.id} />
    </div>
  );
}
