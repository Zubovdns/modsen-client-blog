import { Blog } from "@interfaces/blog.interface";
import { getBaseUrl } from "@utils/get-base-url";

export const getFeaturedPost = async (url?: string): Promise<Blog> => {
  const baseUrl = url || getBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/api/posts/featured`);

    if (!response.ok) {
      throw new Error("Failed to fetch the featured post");
    }

    const postData: Blog = await response.json();
    return postData;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
