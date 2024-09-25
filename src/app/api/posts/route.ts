import { NextRequest, NextResponse } from "next/server";

import { posts_mock } from "@/mocks/posts-mock";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const authorId = searchParams.get("authorId");
  const category = searchParams.get("category")?.toLowerCase();
  const tags = searchParams.get("tags")?.split(",");
  const limit = searchParams.get("limit");
  const page = searchParams.get("page");

  const parsedLimit = limit ? parseInt(limit, 10) : null;
  const parsedPage = page ? parseInt(page, 10) : null;

  if (category) {
    const normalizeTag = (tag: string) =>
      tag
        .toLowerCase()
        .trim()
        .replace(/[^a-zA-Z0-9]/g, "");

    const validTags =
      tags?.filter((tag) => tag.trim() !== "").map(normalizeTag) || [];

    const posts = posts_mock.filter((post) => {
      const isCategoryMatch = post.category === category;

      const normalizedPostTags = post.tags.map(normalizeTag);

      const isTagsMatch =
        validTags.length === 0 ||
        validTags.every((tag) =>
          normalizedPostTags.some((postTag) => postTag.includes(tag)),
        );

      return isCategoryMatch && isTagsMatch;
    });

    return NextResponse.json(posts);
  }

  if (authorId) {
    const posts = posts_mock.filter((post) => post.author.id === authorId);
    return NextResponse.json(posts);
  }

  if (parsedLimit === null) {
    return NextResponse.json(posts_mock);
  }

  const startIndex =
    parsedPage && parsedPage > 0 ? (parsedPage - 1) * parsedLimit : 0;
  const paginatedPosts = posts_mock.slice(startIndex, startIndex + parsedLimit);

  const hasMore = startIndex + parsedLimit < posts_mock.length;

  return NextResponse.json({
    posts: paginatedPosts,
    hasMore,
  });
}
