import { NextResponse } from "next/server";

import { featured_post } from "@/mocks/posts-mock";

export async function GET() {
  return NextResponse.json(featured_post, { status: 200 });
}
