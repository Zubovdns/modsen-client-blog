import { categories } from "@interfaces/category.interface";
import { isValidCategory } from "@utils/is-valid-category";

describe("isValidCategory", () => {
  it("should return true for a valid category", () => {
    expect(isValidCategory(categories.Startup)).toBe(true);
    expect(isValidCategory(categories.Business)).toBe(true);
    expect(isValidCategory(categories.Economy)).toBe(true);
    expect(isValidCategory(categories.Technology)).toBe(true);
  });

  it("should return false for an invalid category", () => {
    expect(isValidCategory("invalidCategory")).toBe(false);
    expect(isValidCategory("start-up")).toBe(false);
    expect(isValidCategory("Tech")).toBe(false);
    expect(isValidCategory("")).toBe(false);
  });

  it("should return false for a non-string input", () => {
    expect(isValidCategory(123 as unknown as string)).toBe(false);
    expect(isValidCategory(null as unknown as string)).toBe(false);
    expect(isValidCategory(undefined as unknown as string)).toBe(false);
    expect(isValidCategory({} as unknown as string)).toBe(false);
  });
});
