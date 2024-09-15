import { useTranslations } from "next-intl";

import { Button } from "@components/button/button";
import typography from "@styles/typography.module.scss";

import styles from "./join-our-team-banner.module.scss";

export const JoinOurTeamBanner = () => {
  const t = useTranslations("JoinOurTeam");

  return (
    <div className={styles.banner}>
      <h4 className={styles.title}>{t("title")}</h4>
      <p className={`${typography.body01} ${styles.text}`}>{t("text")}</p>
      <Button className={styles.button}>{t("button")}</Button>
    </div>
  );
};
