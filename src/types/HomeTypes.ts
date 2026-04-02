import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type CardData = {
  id: number;
  title: string;
  description: string;
  sup: string;
  path: string;
  hiddenText: string;
};

export type PlanCard = {
  id: number;
  title: string;
  icon: IconDefinition;
  pdfPath: string;
};

export type EventCard = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  pdfPath?: string; // for download link
  websiteUrl?: string; // for official website link
};
