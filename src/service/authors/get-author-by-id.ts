import { Author } from "@interfaces/author.interface";
import { getBaseUrl } from "@utils/get-base-url";

export const getAuthorById = async (id: string) => {
  const baseUrl = getBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/api/authors/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch authors");
    }

    const post: Author = await response.json();
    return post;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
