import Link from "next/link";
import typography from "@styles/typography.module.scss";

import styles from "./link.module.scss";
import { LinkProps } from "./types";

export const NavLink = ({ className, href, children }: LinkProps) => (
  <Link
    href={href}
    className={`${typography.body01} ${styles.link} ${className}`}
  >
    {children}
  </Link>
);
