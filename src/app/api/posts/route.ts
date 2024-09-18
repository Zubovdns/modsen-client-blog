import { NextRequest, NextResponse } from "next/server";

import { posts_mock } from "@/mocks/posts-mock";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const limit = searchParams.get("limit");

  if (limit === null) {
    return NextResponse.json(posts_mock);
  }

  return NextResponse.json(posts_mock.slice(0, +limit));
}
