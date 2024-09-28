import React from "react";

export type FormTextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    value?: string;
    ref?: React.Ref<HTMLTextAreaElement>; // Добавляем поддержку ref
    className?: string;
    placeholder?: string;
  };
