export type FormInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: "email" | "text";
  className?: string;
  placeholder?: string;
};
