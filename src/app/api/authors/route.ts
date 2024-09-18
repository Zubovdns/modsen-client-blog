import { NextRequest, NextResponse } from "next/server";

import { authors_mock } from "@/mocks/authors-mock";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const limit = searchParams.get("limit");

  if (limit === null) {
    return NextResponse.json(authors_mock);
  }

  return NextResponse.json(authors_mock.slice(0, +limit));
}
