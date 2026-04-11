import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
interface PlanCardProps {
  id: number;
  pdfPath: string;
  icon: IconDefinition;
  title: string;
}

export default function PlanCard({ id, pdfPath, icon, title }: PlanCardProps) {
  return (
    <div className="col-md-6 col-lg-4 p-3 plan" key={id}>
      <Link to={pdfPath} target="_blank" rel="noopener noreferrer">
        <div className="box">
          <FontAwesomeIcon icon={icon} size="4x" />
          <h3>{title}</h3>
          <div className="info">Download</div>
        </div>
      </Link>
    </div>
  );
}
