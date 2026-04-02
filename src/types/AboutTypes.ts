import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type TechItem =
  | {
      type: "fa";
      icon: IconDefinition;
      color: string;
      bgColor?: string;
      label: string;
    }
  | { type: "img"; src: string; alt: string; label: string };
