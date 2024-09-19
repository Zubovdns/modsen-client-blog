import { Blog } from "@interfaces/blog.interface";
import { getBaseUrl } from "@utils/get-base-url";

export const getLastFourPosts = async (): Promise<Blog[]> => {
  const baseUrl = getBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/api/posts/?limit=4`);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts: Blog[] = await response.json();
    return posts;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
