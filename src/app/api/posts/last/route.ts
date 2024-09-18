import { NextResponse } from "next/server";

import { last_post } from "@/mocks/posts-mock";

export async function GET() {
  return NextResponse.json(last_post, { status: 200 });
}
