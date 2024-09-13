"use client";

import { useState } from "react";
import { Button } from "@components/Button";
import { FormInput } from "@components/FormInput";
import { IconLink } from "@components/IconLink";
import { NavLink } from "@components/NavLink";
import FacebookIcon from "@public/icons/social-networks/facebook-icon.svg";
import InstagramIcon from "@public/icons/social-networks/instagram-icon.svg";
import LinkedInIcon from "@public/icons/social-networks/linked-in-icon.svg";
import TwitterIcon from "@public/icons/social-networks/twitter-icon.svg";
import typography from "@styles/typography.module.scss";

import {
  ABOUT_US,
  BLOG,
  BOTTOM_TEXT_1,
  BOTTOM_TEXT_2,
  BUTTON,
  CONTACT_US,
  FACEBOOK_ALT,
  FACEBOOK_LINK,
  HOME,
  INPUT_PLACEHOLDER,
  INSTAGRAM_ALT,
  INSTAGRAM_LINK,
  LINKEDIN_ALT,
  LINKEDIN_LINK,
  MIDDLE_TITLE,
  TOP_TITLE,
  TWITTER_ALT,
  TWITTER_LINK,
} from "./constants";
import styles from "./footer.module.scss";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topContainer}>
        <h6>{TOP_TITLE}</h6>
        <nav className={styles.navbar}>
          <NavLink href="/">{HOME}</NavLink>
          <NavLink href="/blog">{BLOG}</NavLink>
          <NavLink href="/about-us">{ABOUT_US}</NavLink>
          <NavLink href="/contact-us">{CONTACT_US}</NavLink>
        </nav>
      </div>
      <div className={styles.middleContainer}>
        <h3 className={styles.title}>{MIDDLE_TITLE}</h3>
        <div className={styles.inputContainer}>
          <FormInput
            className={styles.button}
            value={email}
            onChange={handleInputChange}
            type="email"
            placeholder={INPUT_PLACEHOLDER}
          />
          <Button>{BUTTON}</Button>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={`${styles.textContainer}`}>
          <p className={`${typography.body01} ${styles.text}`}>
            {BOTTOM_TEXT_1}
          </p>
          <p className={`${typography.body01} ${styles.text}`}>
            {BOTTOM_TEXT_2}
          </p>
        </div>
        <div className={styles.socialNetworkContainer}>
          <IconLink
            alt={FACEBOOK_ALT}
            href={FACEBOOK_LINK}
            icon={FacebookIcon}
          />
          <IconLink alt={TWITTER_ALT} href={TWITTER_LINK} icon={TwitterIcon} />
          <IconLink
            alt={INSTAGRAM_ALT}
            href={INSTAGRAM_LINK}
            icon={InstagramIcon}
          />
          <IconLink
            alt={LINKEDIN_ALT}
            href={LINKEDIN_LINK}
            icon={LinkedInIcon}
          />
        </div>
      </div>
    </footer>
  );
};
