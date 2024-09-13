import { Button } from "@components/Button";
import { NavLink } from "@components/NavLink";

import styles from "./header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <h4 className={styles.title}>Modsen Client Blog</h4>
    <nav className={styles.navbar}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/about-us">About Us</NavLink>
      <NavLink href="/contact-us">Contact us</NavLink>
    </nav>
    <Button label="Video about us" className={styles.button} />
  </header>
);
