"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import * as Yup from "yup";

import { emailSchema } from "@/schemes/email.schema";
import { Button } from "@components/button/button";
import { FormInput } from "@components/form-input/form-input";
import { IconLink } from "@components/icon-link/icon-link";
import { NavLink } from "@components/nav-link/nav-link";
import FacebookIcon from "@public/icons/social-networks/facebook-icon.svg";
import InstagramIcon from "@public/icons/social-networks/instagram-icon.svg";
import LinkedInIcon from "@public/icons/social-networks/linked-in-icon.svg";
import TwitterIcon from "@public/icons/social-networks/twitter-icon.svg";
import typography from "@styles/typography.module.scss";
import { sendEmail } from "@utils/sendEmail";

import styles from "./footer.module.scss";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null); // состояние ошибки
  const t = useTranslations("Footer");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null); // сбрасываем ошибку при изменении
  };

  const handleSubmit = async () => {
    try {
      setEmail("");
      setError(null);
      await emailSchema.validate({ email });
      sendEmail(email);
    } catch (validationError) {
      if (validationError instanceof Yup.ValidationError) {
        setError(validationError.message); // сохраняем сообщение об ошибке
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topContainer}>
        <h4 className={typography.Heading4}>{t("top-title")}</h4>
        <nav className={styles.navbar}>
          <NavLink href={t("nav.home.href")}>{t("nav.home.title")}</NavLink>
          <NavLink href={t("nav.blog.href")}>{t("nav.blog.title")}</NavLink>
          <NavLink href={t("nav.about-us.href")}>
            {t("nav.about-us.title")}
          </NavLink>
          <NavLink href={t("nav.contact-us.href")}>
            {t("nav.contact-us.title")}
          </NavLink>
          <NavLink href={t("nav.privacy-policy.href")}>
            {t("nav.privacy-policy.title")}
          </NavLink>
        </nav>
      </div>
      <div className={styles.middleContainer}>
        <h2 className={`${typography.Heading2} ${styles.title}`}>
          {t("middle-title")}
        </h2>
        <div className={styles.inputContainer}>
          <FormInput
            className={styles.button}
            value={email}
            onChange={handleInputChange}
            type="email"
            placeholder={t("input-placeholder")}
          />
          <Button onClick={handleSubmit}>{t("button")}</Button>
          {!!error && (
            <p className={classNames(typography.body1, styles.errorMessage)}>
              {error}
            </p>
          )}
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={`${styles.textContainer}`}>
          <p className={`${typography.body1} ${styles.text}`}>
            {t("bottom-text-1")}
          </p>
          <p className={`${typography.body1} ${styles.text}`}>
            {t("bottom-text-2")}
          </p>
        </div>
        <div className={styles.socialNetworkContainer}>
          <IconLink
            alt={t("social-links.facebook.alt")}
            href={t("social-links.facebook.href")}
            icon={FacebookIcon}
          />
          <IconLink
            alt={t("social-links.twitter.alt")}
            href={t("social-links.twitter.href")}
            icon={TwitterIcon}
          />
          <IconLink
            alt={t("social-links.instagram.alt")}
            href={t("social-links.instagram.href")}
            icon={InstagramIcon}
          />
          <IconLink
            alt={t("social-links.linkedin.alt")}
            href={t("social-links.linkedin.href")}
            icon={LinkedInIcon}
          />
        </div>
      </div>
    </footer>
  );
};
