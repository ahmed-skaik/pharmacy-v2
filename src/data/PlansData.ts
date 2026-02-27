import { faFile, faFilePen, faFolder } from "@fortawesome/free-solid-svg-icons";
import type { PlanCard } from "../types";

export const plansData: PlanCard[] = [
  {
    id: 1,
    title: "Detailed Plan",
    icon: faFolder,
    pdfPath: "documents/other/plans/plan-detailed.pdf",
  },
  {
    id: 2,
    title: "≤ 2019 Plan",
    icon: faFile,
    pdfPath: "documents/other/plans/plan-2019.pdf",
  },
  {
    id: 3,
    title: "2020 Plan",
    icon: faFilePen,
    pdfPath: "documents/other/plans/plan-2020.pdf",
  },
];
