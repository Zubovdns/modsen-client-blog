import { Blog } from "@interfaces/blog.interface";
import { Category } from "@interfaces/category.interface";
import { getBaseUrl } from "@utils/get-base-url";

export const getPostsByCategory = async (
  category: Category,
  tags: string[],
  url?: string,
) => {
  const baseUrl = url || getBaseUrl();

  try {
    const response = await fetch(
      `${baseUrl}/api/posts/?category=${category}&tags=${tags.join(",")}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts: Blog[] = await response.json();
    return posts;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
