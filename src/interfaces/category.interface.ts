export enum categories {
  Startup = "startup",
  Business = "business",
  Economy = "economy",
  Technology = "technology",
}

export type Category =
  | categories.Startup
  | categories.Business
  | categories.Economy
  | categories.Technology;
