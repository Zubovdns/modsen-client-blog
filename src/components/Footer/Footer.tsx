"use client";
import { useState } from "react";
import { Button } from "@components/Button";
import { FormInput } from "@components/FormInput";
import { NavLink } from "@components/NavLink";

import styles from "./footer.module.scss";

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
    </footer>
  );
};
