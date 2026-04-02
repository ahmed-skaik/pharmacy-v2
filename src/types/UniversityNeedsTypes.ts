/* =====================================
   University Needs Data Types
===================================== */

interface UniLecture {
  title: string;
  description: string;
  url: string;
}

interface UniPart {
  title: string;
  lectures: UniLecture[];
}

interface UniLecturer {
  name: string;
  parts: UniPart[];
}

interface UniBook {
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
