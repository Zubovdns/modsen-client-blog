import typography from "@styles/typography.module.scss";

import styles from "./form-input.module.scss";
import { FormInputProps } from "./types";

export const FormInput = ({
  className,
  onChange,
  value,
  placeholder,
  type,
}: FormInputProps) => (
  <input
    className={`${typography.body1} ${styles.input} ${className}`}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
