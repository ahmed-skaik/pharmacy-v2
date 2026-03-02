import CourseContentSection from "./sections/CourseContentSection";
import CourseHeadingSection from "./sections/CourseHeadingSection";
import OopsMessage from "../../components/OopsMessage";
import { useParams } from "react-router-dom";
import { courses } from "../../data/CoursesData";

export default function CoursePage() {
  const { courseName } = useParams();

  const course = courses.find((crs) => crs.slug === courseName);

  if (!course) {
    return <OopsMessage />;
  }

  // console.log(courseName);
  return (
    <div className="content">
      <CourseHeadingSection course={course} />
      <CourseContentSection course={course} />
    </div>
  );
}
