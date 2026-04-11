import CourseContentSection from "./sections/CourseContentSection";
import CourseHeadingSection from "./sections/CourseHeadingSection";
import OopsMessage from "../../components/OopsMessage";
import { useParams } from "react-router-dom";
import { COURSES_DATA } from "../../data/CoursesData";
import Seo from "../../meta/Seo";

export default function CoursePage() {
  const { courseName } = useParams();

  const course = COURSES_DATA.find((crs) => crs.slug === courseName);

  if (!course) {
    return <OopsMessage />;
  }

  return (
    <>
      <Seo
        title={course.title}
        description={`${course.title} Faculty of Pharmacy - Alazhar University of Gaza`}
      />
      <div className="content">
        <CourseHeadingSection course={course} />
        <CourseContentSection course={course} />
      </div>
    </>
  );
}
