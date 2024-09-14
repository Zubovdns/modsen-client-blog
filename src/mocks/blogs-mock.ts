import { Blog } from "@interfaces/blog.interface";

import { author_mock } from "./authors-mock";

export const blog_mock: Blog[] = [
  {
    id: "1",
    category: "Startup",
    author: author_mock,
    publish_date: new Date("2022-05-23"),
    title: "Step-by-step guide to choosing great font pairs",
    title_image:
      "https://fastly.picsum.photos/id/961/2000/1500.jpg?hmac=xnqH3hZembbq7kLFE8V0Lj-RVw_9MIaMX-XZppB42i8",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];

export const title_blog = blog_mock[0];
