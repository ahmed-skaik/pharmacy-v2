type CourseClassification = "College Need" | "Major Need";

interface Course {
  id: string;
  name: string;
  code: string;
  classification: CourseClassification;
  link: string;
}

interface Semester {
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
