import {
  faBuildingColumns,
  faDownload,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import type { CourseData } from "../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ResourceCard from "./ResourceCard";

type Props = {
  resources: CourseData;
};

export default function CourseInfo({ resources }: Props) {
  return (
    <ul className="list-unstyled mt-4 mb-5 content">
      <li className="mb-3">
        <ResourceCard
          title={`Description`}
          description={resources.description}
          descriptionNote={""}
          href={undefined}
          icon={faFileLines}
          actionText="Download"
          actionIcon={faDownload}
          buttonVisibility={false}
        />
      </li>
      <li className="mb-3">
        <div className="table-responsive a-parent mb-5">
          <table className="table table-hover table-borderless">
            <thead>
              <tr>
                <th scope="col" colSpan={4} className="pb-3">
                  <span className="d-flex justify-content-start align-items-center">
                    <FontAwesomeIcon
                      icon={faBuildingColumns}
                      fixedWidth
                      size="2x"
                      className="me-1"
                    />
                    <span className="fs-5">Course Info :-</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Course Title:</th>
                <td colSpan={3}>
                  {resources.about.infoTable["Course Title:"]}
                </td>
              </tr>
              <tr>
                <th scope="row">Course Code:</th>
                <td colSpan={3}>{resources.about.infoTable["Course Code:"]}</td>
              </tr>
              <tr>
                <th scope="row">Faculty:</th>
                <td colSpan={3}>{resources.about.infoTable["Faculty:"]}</td>
              </tr>
              <tr>
                <th scope="row">Department:</th>
                <td colSpan={3}>{resources.about.infoTable["Department:"]}</td>
              </tr>
              <tr>
                <th scope="row">Course Classification:</th>
                <td colSpan={3}>
                  {" "}
                  {resources.about.infoTable["Course Classification:"]}
                </td>
              </tr>
              <tr>
                <th scope="row">Course Level:</th>
                <td colSpan={3}>
                  {resources.about.infoTable["Course Level:"]}
                </td>
              </tr>
              <tr>
                <th scope="row">Total Credits:</th>
                <td colSpan={3}>
                  {resources.about.infoTable["Total Credits:"]}
                </td>
              </tr>
              <tr>
                <th scope="row">Pre-requirements:</th>
                {resources.about.preRequirements.map((pre, i) => (
                  <td className={pre.required ? "must" : ""} key={i}>
                    <abbr
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-delay="100"
                      title={pre.title}
                    >
                      {pre.code || "-"}
                    </abbr>
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Notes:</th>
                <td colSpan={3} className="note">
                  You Should at least Study this Course.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    </ul>
  );
}
