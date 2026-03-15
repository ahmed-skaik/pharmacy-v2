import {
  faPrescription,
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  faInfo,
  faHeadset,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

export function GetPageIcon(path: string) {
  if (path === "/") return faPrescription;
  if (path.startsWith("/levels/1")) return fa1;
  if (path.startsWith("/levels/2")) return fa2;
  if (path.startsWith("/levels/3")) return fa3;
  if (path.startsWith("/levels/4")) return fa4;
  if (path.startsWith("/levels/5")) return fa5;
  if (path === "/uni-needs") return faBuildingColumns;
  if (path === "/contact") return faHeadset;
  if (path === "/about") return faInfo;

  return faPrescription;
}
