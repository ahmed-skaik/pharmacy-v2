//Plans Data

import { faFile, faFilePen, faFolder } from "@fortawesome/free-solid-svg-icons";
import type { PlanCard } from "../types/HomeTypes";

export const plansData: PlanCard[] = [
  {
    id: 1,
    title: "Detailed Plan",
    icon: faFolder,
    pdfPath: "/documents/plans/plan-detailed.pdf",
  },
  {
    id: 2,
    title: "≤ 2019 Plan",
    icon: faFile,
    pdfPath: "/documents/plans/plan-2012.pdf",
  },
  {
    id: 3,
    title: "2020 Plan",
    icon: faFilePen,
    pdfPath: "/documents/plans/plan-2012.pdf",
  },
];

// Cards Data

import type { CardData } from "../types/HomeTypes";

export const cardsData: CardData[] = [
  {
    id: 1,
    title: "Level 1",
    description: "Level Courses - Faculty of Pharmacy.",
    sup: "st",
    path: "/levels/1",
    hiddenText: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    title: "Level 2",
    description: "Level Courses - Faculty of Pharmacy.",
    sup: "nd",
    path: "/levels/2",
    hiddenText: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    title: "Level 3",
    description: "Level Courses - Faculty of Pharmacy.",
    sup: "rd",
    path: "/levels/3",
    hiddenText: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 4,
    title: "Level 4",
    description: "Level Courses - Faculty of Pharmacy.",
    sup: "th",
    path: "/levels/4",
    hiddenText: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 5,
    title: "Level 5 🎓",
    description: "& Final Level Courses - Faculty of Pharmacy.",
    sup: "th",
    path: "/levels/5",
    hiddenText: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 6,
    title: "UNIV Needs",
    description:
      "University Needs for all Levels & Faculties at Alazhar University of Gaza.",
    sup: "",
    path: "/uni-needs",
    hiddenText: "",
  },
];

//Events Data

import EventOne from "../assets/images/event-01.jpg";
import EventTwo from "../assets/images/event-02.jpg";
import type { EventCard } from "../types/HomeTypes";

export const eventsData: EventCard[] = [
  {
    id: 1,
    title: "Midterm Exams of the First Semester 2023/2024",
    description: "Midterm Exams of the First Semester 2023/2024",
    image: EventTwo,
    date: "November, 2023",
    location: "Alazhar University of Gaza",
    pdfPath: "/documents/exams-tables/midterm-exams.pdf",
  },
  {
    id: 2,
    title: "Final Exams of the First Semester 2023/2024",
    description: "Final Exams of the First Semester 2023/2024",
    image: EventTwo,
    date: "January, 2024",
    location: "Alazhar University of Gaza",
    pdfPath: "/documents/exams-tables/final-exams.pdf",
  },
  {
    id: 3,
    title:
      "The Second International Conference on Pharmaceutical Sciences (ICPS II)",
    description: "Pharmaceutical Research Innovation for Optimized Therapy.",
    image: EventOne,
    date: "September 4-5, 2022",
    location: "Alazhar University of Gaza",
    websiteUrl: "https://www.alazhar.edu.ps/icps2/index.asp",
  },
];
