import { RelatedPosts } from "@components/related-posts/related-posts";

import { BlogPageProps } from "./types";

export default function BlogPage({ params }: BlogPageProps) {
  return <RelatedPosts id={params.id} />;
}
