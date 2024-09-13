import Link from "next/link";

import { LinkProps } from "./types";

import styles from "./link.module.scss";
import typography from "@styles/typography.module.scss";

export const NavLink = ({ className, href, children }: LinkProps) => (
  <Link
    href={href}
    className={`${typography.body01} ${styles.link} ${className}`}
  >
    {children}
  </Link>
);
