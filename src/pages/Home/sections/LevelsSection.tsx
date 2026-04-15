import { CARDS_DATA } from "../../../data/HomeData";
import DotsDecoration from "../../../components/DotsDecoration";
import SectionHeading from "../../../components/SectionHeading";
import LevelCard from "../components/LevelCard";

export default function LevelsSection() {
  return (
    <div className="courses pt-5 pb-5" id="courses">
      <DotsDecoration />
      <div className="container">
        <SectionHeading
          titleStart="E-learning"
          titleHighlight="Courses"
          description="You can Reach all the E-learning Lectures for all Levels - Faculty
            of Pharmacy"
          as="h2"
          className="main-title mt-5 mb-5"
        />
        <div className="row mt-5 mb-5">
          {CARDS_DATA.map((card) => (
            <LevelCard
              key={card.id}
              id={card.id}
              path={card.path}
              title={card.title}
              description={card.description}
              sup={card.sup}
              hiddenText={card.hiddenText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
