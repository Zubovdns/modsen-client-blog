import styles from "./button.module.scss";
import { ButtonProps } from "./types";

export const Button = ({ onClick, children, className }: ButtonProps) => (
  <button className={`${styles.button} ${className}`} onClick={onClick}>
    {children}
  </button>
);
