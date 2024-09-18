import { Blog } from "@interfaces/blog.interface";

export const getFeaturedPost = async (): Promise<Blog> => {
  try {
    const response = await fetch("http://localhost:3000/api/posts/featured");

    if (!response.ok) {
      throw new Error("Failed to fetch the featured post");
    }

    const postData: Blog = await response.json();
    return postData;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
