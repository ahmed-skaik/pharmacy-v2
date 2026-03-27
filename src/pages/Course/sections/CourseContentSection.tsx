import { lazy, Suspense } from "react";
import type { CourseData } from "../../../types";
import SectionBlock from "../components/SectionBlock";

const LazyLectureAccordion = lazy(
  () => import("../components/LectureAccordion"),
);
const LazyCourseNotes = lazy(() => import("../components/CourseNotes"));
const LazyCourseResources = lazy(() => import("../components/CourseResources"));
const LazyCourseInfo = lazy(() => import("../components/CourseInfo"));

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
              <Suspense fallback={<div>Loading Lectures..</div>}>
                <LazyCourseNotes notes={course.courseNotes} />
                <LazyLectureAccordion lectures={course.lectures} />
              </Suspense>
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
            <Suspense fallback={<div>Loading Resources..</div>}>
              <LazyCourseResources resources={course.resources} />
            </Suspense>
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
            <Suspense fallback={<div>Loading Course Info..</div>}>
              <LazyCourseInfo resources={course} />
            </Suspense>
          </SectionBlock>
        </div>
      </div>
    </div>
  );
}
