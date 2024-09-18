export const getFirstSixAuthors = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/authors/");

    if (!response.ok) {
      throw new Error("Failed to fetch the featured post");
    }

    const postData = await response.json();
    return postData;
  } catch (error) {
    throw new Error("HandledError: " + error);
  }
};
