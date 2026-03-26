import type { CourseData } from "../../../types";
import SectionBlock from "../components/SectionBlock";
import LectureAccordion from "../components/LectureAccordion";
import CourseNotes from "../components/CourseNotes";
import CourseResources from "../components/CourseResources";
import CourseInfo from "../components/CourseInfo";

type Props = {
  course: CourseData;
};

export default function CourseContentSection({ course }: Props) {
  return (
    <div className="container">
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active videos"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <SectionBlock
            title="E-learning"
            highlight="Lectures"
            description="Recorded E-Learning Lectures"
          >
            <div className="year mt-4 mb-5">
              <CourseNotes notes={course.courseNotes} />
              <LectureAccordion lectures={course.lectures} />
            </div>{" "}
          </SectionBlock>
        </div>
        <div
          className="tab-pane fade resourses"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <SectionBlock
            title="Files &amp;"
            highlight="Resources"
            description="Reference Book, Summaries, Previous Exams &amp; More !"
          >
            <CourseResources resources={course.resources} />
          </SectionBlock>
        </div>
        <div
          className="tab-pane fade about-course"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <SectionBlock
            title="About This"
            highlight="Course"
            description="Information About The Course"
          >
            <CourseInfo resources={course} />
          </SectionBlock>
        </div>
      </div>
    </div>
  );
}
