import { Blog } from "@interfaces/blog.interface";
import { getBaseUrl } from "@utils/get-base-url";

export const getPostsByAuthorId = async (id: string) => {
  const baseUrl = getBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/api/posts/?authorId=${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts: Blog[] = await response.json();
    return posts;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
