import { NextRequest, NextResponse } from "next/server";

import { posts_mock } from "@/mocks/posts-mock";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const post = posts_mock.find((post) => post.id === id);

  if (!post) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  return NextResponse.json(post, { status: 200 });
}
