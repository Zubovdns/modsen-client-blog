import { Blog } from "@interfaces/blog.interface";
import { getBaseUrl } from "@utils/get-base-url";

export type PostsReceivedData = {
  posts: Blog[];
  hasMore: boolean;
};

export const getPostsByPage = async (
  page: number,
  url?: string,
): Promise<PostsReceivedData> => {
  const baseUrl = url || getBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/api/posts/?limit=5&page=${page}`);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts: PostsReceivedData = await response.json();
    return posts;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
