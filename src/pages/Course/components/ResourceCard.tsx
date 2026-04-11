import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { memo } from "react";

type Props = {
  title: string;
  description: string;
  descriptionNote: string;
  href: string | undefined;
  icon: IconDefinition;
  actionText: string;
  actionIcon: IconDefinition;
  buttonVisibility: boolean;
};

function ResourceCard({
  title,
  description,
  descriptionNote,
  href,
  icon,
  actionText,
  actionIcon,
  buttonVisibility,
}: Props) {
  return (
    <a
      href={href}
      className={`a-parent ${href === "404" ? "d-none" : "d-flex"} justify-content-between align-items-center flex-column flex-md-row`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="info d-flex justify-content-between align-items-center flex-column flex-md-row text-center text-md-start">
        <div className="img d-flex justify-content-center align-items-center ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
          <FontAwesomeIcon icon={icon} fixedWidth />
        </div>
        <div className="txt">
          <h2 className="mb-2 mb-md-1">{title}</h2>
          <p className="mb-3 mb-md-0">
            {description}
            <br className="d-block d-lg-none" />{" "}
            {descriptionNote && <span>({descriptionNote})</span>}
          </p>
        </div>
      </div>
      <span
        className="anchor-btn d-flex align-items-center justify-content-between ms-auto me-auto me-md-0"
        style={{ visibility: buttonVisibility ? "visible" : "hidden" }}
      >
        {actionText}
        <FontAwesomeIcon icon={actionIcon} fixedWidth />
      </span>
    </a>
  );
}

export default memo(ResourceCard);
