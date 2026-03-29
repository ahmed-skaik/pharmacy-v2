// types.ts
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type CourseClassification = "College Need" | "Major Need";

export interface Course {
  id: string;
  name: string;
  code: string;
  classification: CourseClassification;
  link: string;
}

export interface Semester {
  semester: string;
  title: string;
  isOptional: boolean;
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
  isOptional: boolean;
  books: UniBook[];
  lecturers: UniLecturer[];
}

//for course data file :

export interface CourseData {
  slug: string;
  title: string;
  description: string;
  lecturers: {
    title?: string;
    name: string;
    altLink?: string;
  }[];

  courseNotes?: { note: string; url?: string; urlText?: string }[];

  lectures: {
    chapterTitle: string;
    chapterTitleNote?: string;
    documents: {
      title: string;
      url: string;
      type: "slides" | "answers" | "file" | "questions";
    }[];
    videos: {
      title: string;
      description: string;
      url: string;
    }[];
  }[];

  resources: {
    referenceBooks?: { title: string; url: string }[];
    extraResources?: { title: string; url: string; note: string }[] | null;
    summaries?: { title: string; url: string }[];
    personalRecommendations?: { title: string; url: string };
    exams: { title: string; url: string }[];
  };

  about: {
    description: string;
    infoTable: Record<string, string>;
    preRequirements: {
      code?: string;
      title?: string;
      required?: boolean;
    }[]; // ← ADD THIS
  };
}
