// types.ts

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
