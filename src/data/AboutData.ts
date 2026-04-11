import viteLogo from "../assets/svgs/vite.svg";
import NetlifyLogo from "../assets/svgs/netlify-logo.svg";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faReact,
  faSass,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";
import type { TechItem } from "../types/AboutTypes";

export const TECH_STACK_DATA: TechItem[] = [
  { type: "fa", icon: faHtml5, color: "#e34c26", label: "HTML 5" },
  { type: "fa", icon: faCss3, color: "#264de4", label: "CSS 3" },
  { type: "fa", icon: faSass, color: "#cc6699", label: "SASS" },
  { type: "fa", icon: faBootstrap, color: "#7c69ef", label: "Bootstrap" },
  {
    type: "fa",
    icon: faJs,
    color: "#f0db4f",
    bgColor: "#323330",
    label: "Javascript",
  },
  { type: "fa", icon: faReact, color: "#61DBFB", label: "Reactjs" },
  { type: "fa", icon: faTypescript, color: "#3178c6", label: "Typescript" },
  { type: "img", src: viteLogo, alt: "vite-logo", label: "Vite" },
  { type: "img", src: NetlifyLogo, alt: "Netlify-logo", label: "Netlify" },
  { type: "fa", icon: faGitAlt, color: "#f1502f", label: "Git" },
  { type: "fa", icon: faGithub, color: "#171515", label: "Github" },
  { type: "fa", icon: faFontAwesome, color: "#228ae6", label: "Fontawesome" },
];
