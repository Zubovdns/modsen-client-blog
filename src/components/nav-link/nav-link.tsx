import { Link } from "@i18n/routing";
import typography from "@styles/typography.module.scss";

import styles from "./nav-link.module.scss";
import { LinkProps } from "./types";

export const NavLink = ({ className, href, children }: LinkProps) => (
  <Link
    href={href}
    className={`${typography.body01} ${styles.link} ${className}`}
  >
    {children}
  </Link>
);
