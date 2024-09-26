import classNames from "classnames";

import { ContactForm } from "@components/contact-form/contact-form";
import typography from "@styles/typography.module.scss";

import styles from "./page.module.scss";

export default function ContactUs() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={typography.cap3}>Contact us</p>
        <h1 className={typography.Heading1}>Let’s Start a Conversation</h1>
        <p className={classNames(typography.body1, styles.headerDescription)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
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
            Working hours
          </p>
          <div className={styles.informationContent}>
            <h5 className={typography.Heading5}>Monday To Friday</h5>
            <h5 className={typography.Heading5}>9:00 AM to 8:00 PM</h5>
            <p className={classNames(typography.body2, styles.lightText)}>
              Our Support Team is available 24/7
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
            Contact us
          </p>
          <div className={styles.informationContent}>
            <h5 className={typography.Heading5}>020 7993 2905</h5>
            <p className={classNames(typography.body2, styles.lightText)}>
              hello@finsweet.com
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
