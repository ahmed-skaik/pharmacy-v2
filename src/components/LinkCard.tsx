import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface LinkCardProps {
  href: string;
  title: string;
  subtitle?: React.ReactNode;
  icon: IconDefinition;
  actionText?: string;
  actionIcon?: IconDefinition;
  cardClassName?: string;
  target?: "_blank" | "_self";
  rel?: string;
  hideAction?: boolean;
}

export default function LinkCard({
  href,
  title,
  subtitle,
  icon,
  actionText,
  actionIcon,
  cardClassName = "",
  target,
  rel,
  hideAction = false,
}: LinkCardProps) {
  return (
    <a href={href} className="a-parent" target={target} rel={rel}>
      <div
        className={`card card-body mb-3 flex-column flex-md-row justify-content-between ${cardClassName}`}
      >
        <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
          <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
            <FontAwesomeIcon icon={icon} fixedWidth />
          </div>
          <div className="txt">
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
        {(actionText || actionIcon) && (
          <div className="link align-self-center align-self-md-end">
            <span style={hideAction ? { visibility: "hidden" } : undefined}>
              {actionText}
              {actionIcon && <FontAwesomeIcon icon={actionIcon} fixedWidth />}
            </span>
          </div>
        )}
      </div>
    </a>
  );
}
