import { ButtonProps } from "./types";

import styles from "./button.module.scss";

export const Button = ({ onClick, children, className }: ButtonProps) => (
  <button className={`${styles.button} ${className}`} onClick={onClick}>
    {children}
  </button>
);
