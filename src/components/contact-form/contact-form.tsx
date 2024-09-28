"use client";

import { useForm } from "react-hook-form";
import classNames from "classnames";
import * as yup from "yup";

import { Button } from "@components/button/button";
import { FormInput } from "@components/form-input/form-input";
import { FormTextArea } from "@components/form-text-area/form-text-area";
import { yupResolver } from "@hookform/resolvers/yup";
import typography from "@styles/typography.module.scss";

import styles from "./contact-form.module.scss";
import { ContactFormData } from "./contact-form.type";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <FormInput
          {...register("name")}
          type="text"
          placeholder="Your Name"
          className={styles.input}
        />
        {errors.name && (
          <p className={classNames(typography.body1, styles.error)}>
            {errors.name.message}
          </p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <FormInput
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className={styles.input}
        />
        {errors.email && (
          <p className={classNames(typography.body1, styles.error)}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div className={classNames(styles.inputContainer)}>
        <FormTextArea
          {...register("message")}
          placeholder="Your Message"
          className={classNames(styles.input)}
        />
        {errors.message && (
          <p className={classNames(typography.body1, styles.error)}>
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" className={styles.inputContainer}>
        Send Message
      </Button>
    </form>
  );
};
