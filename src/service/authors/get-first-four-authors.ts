import { Author } from "@interfaces/author.interface";
import { getBaseUrl } from "@utils/get-base-url";

export const getFirstFourAuthors = async (): Promise<Author[]> => {
  const baseUrl = getBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/api/authors?limit=4`);

    if (!response.ok) {
      throw new Error("Failed to fetch the featured post");
    }

    const postData: Author[] = await response.json();
    return postData;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
