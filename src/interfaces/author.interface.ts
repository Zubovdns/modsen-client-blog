import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Author {
  id: string;

  name: string;
  avatar: {
    src: string | StaticImport;
    alt: string;
  };

  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  linkedin: string | null;

  description: string;
}
