import { Button } from "@components/Button";
import typography from "@styles/typography.module.scss";

import styles from "./banner.module.scss";
import { BUTTON, TEXT, TITLE } from "./constants";

export const JoinOurTeamBanner = () => (
  <div className={styles.banner}>
    <h4 className={styles.title}>{TITLE}</h4>
    <p className={`${typography.body01} ${styles.text}`}>{TEXT}</p>
    <Button className={styles.button}>{BUTTON}</Button>
  </div>
);
