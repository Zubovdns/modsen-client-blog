import { Blog } from "@interfaces/blog.interface";
import { getBaseUrl } from "@utils/get-base-url";

export const getPostById = async (id: string, url?: string) => {
  const baseUrl = url || getBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/api/posts/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const post: Blog = await response.json();
    return post;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
