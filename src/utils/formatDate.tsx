export const formattedDate = (date: Date, locale: string) =>
  date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
