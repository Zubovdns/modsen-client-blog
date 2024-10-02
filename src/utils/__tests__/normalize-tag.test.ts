import { getValidTags, normalizeTag } from "@utils/normalize-tag";

describe("normalizeTag", () => {
  it("should convert a tag to lowercase and remove non-alphanumeric characters", () => {
    expect(normalizeTag("Technology!")).toBe("technology");
    expect(normalizeTag("  Business  ")).toBe("business");
    expect(normalizeTag("Start-Up@2023")).toBe("startup2023");
  });

  it("should return an empty string for a tag containing only special characters", () => {
    expect(normalizeTag("$$$")).toBe("");
    expect(normalizeTag("   !!! ")).toBe("");
  });
});

describe("getValidTags", () => {
  it("should normalize and return an array of valid tags", () => {
    const tags = ["  Startup ", "Business!", " Economy ", "##Technology$$"];
    expect(getValidTags(tags)).toEqual([
      "startup",
      "business",
      "economy",
      "technology",
    ]);
  });

  it("should remove empty or whitespace-only tags and normalize the rest", () => {
    const tags = ["   ", "ValidTag", "", " AnotherTag! "];
    expect(getValidTags(tags)).toEqual(["validtag", "anothertag"]);
  });

  it("should return an empty array if no input is provided", () => {
    expect(getValidTags()).toEqual([]);
  });
});
