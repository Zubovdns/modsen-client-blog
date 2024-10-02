import { formattedDate } from "@utils/formatDate";

describe("formattedDate", () => {
  const locale = "en-US";

  it("should format a Date object correctly", () => {
    const date = new Date("2024-10-02");
    expect(formattedDate(date, locale)).toBe("October 2, 2024");
  });

  it("should format a date string correctly", () => {
    const dateString = "2024-10-02";
    expect(formattedDate(dateString, locale)).toBe("October 2, 2024");
  });

  it("should format a timestamp number correctly", () => {
    const timestamp = 1727836800000;
    expect(formattedDate(timestamp, locale)).toBe("October 2, 2024");
  });

  it("should throw an error for invalid date strings", () => {
    expect(() => formattedDate("invalid-date", locale)).toThrow(
      "Invalid date format",
    );
  });

  it("should throw an error for unsupported input types", () => {
    expect(() => formattedDate({}, locale)).toThrow("Invalid date input");
    expect(() => formattedDate(null, locale)).toThrow("Invalid date input");
    expect(() => formattedDate(undefined, locale)).toThrow(
      "Invalid date input",
    );
  });

  it("should handle locale formatting", () => {
    const date = new Date("2024-10-02");
    expect(formattedDate(date, "fr-FR")).toBe("2 octobre 2024");
    expect(formattedDate(date, "ru-RU")).toBe("2 октября 2024 г.");
  });
});
