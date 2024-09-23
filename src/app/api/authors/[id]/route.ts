import { NextRequest, NextResponse } from "next/server";

import { authors_mock } from "@/mocks/authors-mock";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const author = authors_mock.find((post) => post.id === id);

  if (!author) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  return NextResponse.json(author, { status: 200 });
}
