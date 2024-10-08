import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";
import classNames from "classnames";

import { ContactForm } from "@components/contact-form/contact-form";
import typography from "@styles/typography.module.scss";

import styles from "./page.module.scss";

const ContactMap = dynamic(
  () =>
    import("@components/contact-map/contact-map").then(
      (module) => module.ContactMap,
    ),
  {
    ssr: false,
  },
);

export default async function ContactUs() {
  const t = await getTranslations("ContactUsPage");

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={typography.cap3}>{t("header.header")}</p>
        <h1 className={typography.Heading1}>{t("header.title")}</h1>
        <p className={classNames(typography.body1, styles.headerDescription)}>
          {t("description")}
        </p>
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.information}>
          <p
            className={classNames(
              typography.body2,
              styles.informationHeader,
              styles.lightText,
            )}
          >
            {t("workingHours.header")}
          </p>
          <div className={styles.informationContent}>
            <h5 className={typography.Heading5}>
              {t("workingHours.content.days")}
            </h5>
            <h5 className={typography.Heading5}>
              {t("workingHours.content.hours")}
            </h5>
            <p className={classNames(typography.body2, styles.lightText)}>
              {t("workingHours.content.supportInfo")}
            </p>
          </div>
        </div>
        <div className={styles.information}>
          <p
            className={classNames(
              typography.body2,
              styles.informationHeader,
              styles.lightText,
            )}
          >
            {t("contactUs.header")}
          </p>
          <div className={styles.informationContent}>
            <h5 className={typography.Heading5}>
              {t("contactUs.content.phone")}
            </h5>
            <p className={classNames(typography.body2, styles.lightText)}>
              {t("contactUs.content.email")}
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
      <ContactMap />
    </div>
  );
}
