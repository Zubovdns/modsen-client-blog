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

import styles from "./footer.module.scss";
import typography from "@styles/typography.module.scss";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topContainer}>
        <h6>Modsen Client Blog</h6>
        <nav className={styles.navbar}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/contact-us">Contact us</NavLink>
        </nav>
      </div>
      <div className={styles.middleContainer}>
        <h3 className={styles.title}>
          Subscribe to our news letter to get latest updates and news
        </h3>
        <div className={styles.inputContainer}>
          <FormInput
            className={styles.button}
            value={email}
            onChange={handleInputChange}
            type="email"
            placeholder="Enter Your Email"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={`${styles.textContainer}`}>
          <p className={`${typography.body01} ${styles.text}`}>
            Finstreet 118 2561 Fintown
          </p>
          <p className={`${typography.body01} ${styles.text}`}>
            Hello@finsweet.com 020 7993 2905
          </p>
        </div>
        <div className={styles.socialNetworkContainer}>
          <IconLink alt="Facebook icon" href="/" icon={FacebookIcon} />
          <IconLink alt="Twitter icon" href="/" icon={TwitterIcon} />
          <IconLink alt="Instagram icon" href="/" icon={InstagramIcon} />
          <IconLink alt="LinkedIn icon" href="/" icon={LinkedInIcon} />
        </div>
      </div>
    </footer>
  );
};
