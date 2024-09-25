import { Blog } from "@interfaces/blog.interface";
import { categories } from "@interfaces/category.interface";

import { authors_mock } from "./authors-mock";

export const posts_mock: Blog[] = [
  {
    id: "1",
    category: categories.Startup,
    author: authors_mock[0],
    publish_date: new Date("2022-05-23"),
    title: "Step-by-step guide to choosing great font pairs",
    title_image:
      "https://fastly.picsum.photos/id/961/2000/1500.jpg?hmac=xnqH3hZembbq7kLFE8V0Lj-RVw_9MIaMX-XZppB42i8",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: ["startup", "blog", "test"],
  },
  {
    id: "2",
    category: categories.Business,
    author: authors_mock[1],
    publish_date: new Date("2023-04-21"),
    title: "Step-by-step guide to choosing great font pairs",
    title_image:
      "https://fastly.picsum.photos/id/176/2000/1500.jpg?hmac=SjB0gQR3Khn2q56U-rwKyWynt_VdUq6kzv_FlJBtRwc",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: ["startup", "blog", "test"],
  },
  {
    id: "3",
    category: categories.Startup,
    author: authors_mock[2],
    publish_date: new Date("2023-05-1"),
    title: "8 Figma design systems that you can download for free today.",
    title_image:
      "https://fastly.picsum.photos/id/176/2000/1500.jpg?hmac=SjB0gQR3Khn2q56U-rwKyWynt_VdUq6kzv_FlJBtRwc",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: ["startup", "blog", "test"],
  },
  {
    id: "4",
    category: categories.Startup,
    author: authors_mock[3],
    publish_date: new Date("2023-05-1"),
    title: "8 Figma design systems that you can download for free today.",
    title_image:
      "https://fastly.picsum.photos/id/176/2000/1500.jpg?hmac=SjB0gQR3Khn2q56U-rwKyWynt_VdUq6kzv_FlJBtRwc",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: ["startup", "blog"],
  },
  {
    id: "5",
    category: categories.Startup,
    author: authors_mock[0],
    publish_date: new Date("2022-05-23"),
    title: "Step-by-step guide to choosing great font pairs",
    title_image:
      "https://fastly.picsum.photos/id/961/2000/1500.jpg?hmac=xnqH3hZembbq7kLFE8V0Lj-RVw_9MIaMX-XZppB42i8",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: ["startup", "blog"],
  },
  {
    id: "6",
    category: categories.Startup,
    author: authors_mock[2],
    publish_date: new Date("2023-05-1"),
    title: "8 Figma design systems that you can download for free today.",
    title_image:
      "https://fastly.picsum.photos/id/176/2000/1500.jpg?hmac=SjB0gQR3Khn2q56U-rwKyWynt_VdUq6kzv_FlJBtRwc",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: ["startup", "blog"],
  },
  {
    id: "7",
    category: categories.Startup,
    author: authors_mock[3],
    publish_date: new Date("2023-05-1"),
    title: "8 Figma design systems that you can download for free today.",
    title_image:
      "https://fastly.picsum.photos/id/176/2000/1500.jpg?hmac=SjB0gQR3Khn2q56U-rwKyWynt_VdUq6kzv_FlJBtRwc",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: ["startup", "blog"],
  },
  {
    id: "8",
    category: categories.Startup,
    author: authors_mock[0],
    publish_date: new Date("2022-05-23"),
    title: "Step-by-step guide to choosing great font pairs",
    title_image:
      "https://fastly.picsum.photos/id/961/2000/1500.jpg?hmac=xnqH3hZembbq7kLFE8V0Lj-RVw_9MIaMX-XZppB42i8",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: ["startup", "blog"],
  },
  {
    id: "9",
    category: categories.Startup,
    author: authors_mock[2],
    publish_date: new Date("2023-05-1"),
    title: "8 Figma design systems that you can download for free today.",
    title_image:
      "https://fastly.picsum.photos/id/176/2000/1500.jpg?hmac=SjB0gQR3Khn2q56U-rwKyWynt_VdUq6kzv_FlJBtRwc",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: ["startup", "blog"],
  },
  {
    id: "10",
    category: categories.Startup,
    author: authors_mock[3],
    publish_date: new Date("2023-05-1"),
    title: "8 Figma design systems that you can download for free today.",
    title_image:
      "https://fastly.picsum.photos/id/176/2000/1500.jpg?hmac=SjB0gQR3Khn2q56U-rwKyWynt_VdUq6kzv_FlJBtRwc",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: ["startup", "blog"],
  },
  {
    id: "11",
    category: categories.Startup,
    author: authors_mock[0],
    publish_date: new Date("2022-05-23"),
    title: "Step-by-step guide to choosing great font pairs",
    title_image:
      "https://fastly.picsum.photos/id/961/2000/1500.jpg?hmac=xnqH3hZembbq7kLFE8V0Lj-RVw_9MIaMX-XZppB42i8",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: ["startup", "blog"],
  },
  {
    id: "12",
    category: categories.Startup,
    author: authors_mock[0],
    publish_date: new Date("2022-05-23"),
    title: "Step-by-step guide to choosing great font pairs",
    title_image:
      "https://fastly.picsum.photos/id/961/2000/1500.jpg?hmac=xnqH3hZembbq7kLFE8V0Lj-RVw_9MIaMX-XZppB42i8",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    content: [
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
      {
        type: "heading",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
      },
    ],
    tags: ["startup", "blog"],
  },
];

export const last_post = posts_mock[0];
export const featured_post = posts_mock[1];
