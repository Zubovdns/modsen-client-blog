import { Blog } from "@interfaces/blog.interface";

export const getPostById = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const post: Blog = await response.json();
    return post;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
