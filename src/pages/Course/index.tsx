import CourseContentSection from "./sections/CourseContentSection";
import CourseHeadingSection from "./sections/CourseHeadingSection";

export default function CoursePage() {
  return (
    <div className="content">
      <CourseHeadingSection />
      <CourseContentSection />
    </div>
  );
}
