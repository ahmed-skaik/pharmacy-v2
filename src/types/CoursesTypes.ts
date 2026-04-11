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
    exams?: { title: string; url: string }[];
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
