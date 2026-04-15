import { PLANS_DATA } from "../../../data/HomeData";
import SectionHeading from "../../../components/SectionHeading";
import PlanCard from "../components/PlanCard";

export default function PlansSection() {
  return (
    <div className="plans pt-5 pb-5 text-center" id="plans">
      <div className="container">
        <SectionHeading
          titleStart="Studying"
          titleHighlight="Plan"
          description="Studying Plans for the Bachelor's Degree Program in Pharmacy at the Faculty of Pharmacy - Alazhar University of Gaza"
          as="h2"
          className="main-title mt-5 mb-5"
        />
        <div className="row mt-5 mb-5">
          {PLANS_DATA.map((plan) => (
            <PlanCard
              key={plan.id}
              id={plan.id}
              pdfPath={plan.pdfPath}
              icon={plan.icon}
              title={plan.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
