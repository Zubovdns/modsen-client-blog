import { Blog } from "@interfaces/blog.interface";
import { getBaseUrl } from "@utils/get-base-url";

type ReceivedData = {
  posts: Blog[];
  hasMore: boolean;
};

export const getLastFourPosts = async (url?: string): Promise<ReceivedData> => {
  const baseUrl = url || getBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/api/posts/?limit=4`);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts: ReceivedData = await response.json();
    return posts;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
