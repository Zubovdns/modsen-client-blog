import { Blog } from "@interfaces/blog.interface";

export const getLastFourPosts = async (): Promise<Blog[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/posts/?limit=4");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts: Blog[] = await response.json();
    return posts;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
