import { Author } from "@interfaces/author.interface";

export const getFirstFourAuthors = async (): Promise<Author[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/authors?limit=4");

    if (!response.ok) {
      throw new Error("Failed to fetch the featured post");
    }

    const postData: Author[] = await response.json();
    return postData;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
