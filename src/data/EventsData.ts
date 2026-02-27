import EventOne from "../assets/images/event-01.jpg";
import EventTwo from "../assets/images/event-02.jpg";
import type { EventCard } from "../types";

export const eventsData: EventCard[] = [
  {
    id: 1,
    title: "Midterm Exams of the First Semester 2023/2024",
    description: "Midterm Exams of the First Semester 2023/2024",
    image: EventTwo,
    date: "November, 2023",
    location: "Alazhar University of Gaza",
    pdfPath: "documents/other/exam-table/midterm-exams.pdf",
  },
  {
    id: 2,
    title: "Final Exams of the First Semester 2023/2024",
    description: "Final Exams of the First Semester 2023/2024",
    image: EventTwo,
    date: "January, 2024",
    location: "Alazhar University of Gaza",
    pdfPath: "documents/other/exam-table/final-exams.pdf",
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
