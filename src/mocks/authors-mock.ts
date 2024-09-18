import { Author } from "@interfaces/author.interface";

export const authors_mock: Author[] = [
  {
    id: "1",
    name: "James West",
    avatar: {
      src: "https://i.pravatar.cc/1000?u=asdasddasdxda",
      alt: "ames West's avatar",
    },
    description: "Content Writer @Company",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com/",
    twitter: "https://x.com/",
    linkedin: "https://lt.linkedin.com/",
  },
  {
    id: "2",
    name: "Dianne Russell",
    avatar: {
      src: "https://i.pravatar.cc/1000?u=asdasndkjbnaskjdnaskjdbkasnd",
      alt: "Dianne Russell's avatar",
    },
    description: "Content Writer @Company",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com/",
    twitter: "https://x.com/",
    linkedin: "https://lt.linkedin.com/",
  },
  {
    id: "3",
    name: "Floyd Miles",
    avatar: {
      src: "https://i.pravatar.cc/1000?u=asdasdasddasdxda",
      alt: "Floyd Miles's avatar",
    },
    description: "Content Writer @Company",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com/",
    twitter: "https://x.com/",
    linkedin: "https://lt.linkedin.com/",
  },
  {
    id: "4",
    name: "Jenny Wilson",
    avatar: {
      src: "https://i.pravatar.cc/1000?u=asdhaskjdkas",
      alt: "Jenny Wilson's avatar",
    },
    description: "Content Writer @Company",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com/",
    twitter: "https://x.com/",
    linkedin: "https://lt.linkedin.com/",
  },
];

export const list_of_authors = authors_mock.slice(0, 4);
