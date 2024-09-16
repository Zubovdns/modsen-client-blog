import { BlogPageProps } from "./types";

export default function BlogPage({ params }: BlogPageProps) {
  return <div>ID: {params.id}</div>;
}
