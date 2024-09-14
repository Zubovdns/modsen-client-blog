import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Author {
  id: string;

  name: string;
  avatar: string | StaticImport;

  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  linkedin: string | null;

  description: string;
}
