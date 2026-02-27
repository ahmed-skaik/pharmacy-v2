// types.ts
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type CourseClassification = "College Need" | "Major Need";

export interface Course {
  id: string;
  name: string;
  code: string;
  classification: CourseClassification;
  departmentPrefix: string;
  link: string;
}

export interface Semester {
  semester: string;
  courses: Course[];
}

export interface LevelStructure {
  id: number;
  title: string;
  description: string;
  semesters: Semester[];
}

// define the data array with the type
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

/* =====================================
   University Needs Data Types
===================================== */

export interface UniLecture {
  title: string;
  description: string;
  url: string;
}

export interface UniPart {
  title: string;
  lectures: UniLecture[];
}

export interface UniLecturer {
  name: string;
  parts: UniPart[];
}

export interface UniBook {
  title: string;
  url: string;
}

export interface UniSubject {
  id: string;
  title: string;
  books: UniBook[];
  lecturers: UniLecturer[];
}
