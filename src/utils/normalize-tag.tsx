export const normalizeTag = (tag: string): string =>
  tag
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "");

export const getValidTags = (tags: string[] = []): string[] =>
  tags.filter((tag) => tag.trim() !== "").map(normalizeTag);
