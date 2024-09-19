import emailjs from "@emailjs/browser";

export const sendEmail = (email: string) => {
  const templateParams = {
    user_email: email,
  };

  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch((err) => {
      console.error("FAILED...", err);
    });
};
