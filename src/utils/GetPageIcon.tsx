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
  faDna,
  faMicrochip,
  faFlaskVial,
  faSquareRootVariable,
  faFilePrescription,
  faVial,
  faSkull,
  faVials,
  faFilter,
  faVialCircleCheck,
  faBrain,
  faBacterium,
  faHeartPulse,
  faSeedling,
  faPrescriptionBottle,
  faDisease,
  faPills,
  faMortarPestle,
  faCapsules,
  faSyringe,
  faTablets,
  faChartSimple,
  faBong,
  faBriefcaseMedical,
  faScaleBalanced,
  faIndustry,
  faStaffAesculapius,
  faPrescriptionBottleMedical,
  faMicroscope,
  faPlateWheat,
  faBiohazard,
  faHandDots,
} from "@fortawesome/free-solid-svg-icons";

export function GetPageIcon(path: string) {
  if (path === "/") return faPrescription;
  if (path.startsWith("/levels/1")) return fa1;
  if (path.startsWith("/levels/2")) return fa2;
  if (path.startsWith("/levels/3")) return fa3;
  if (path.startsWith("/levels/4")) return fa4;
  if (path.startsWith("/levels/5")) return fa5;
  if (
    path.startsWith("/courses/cell-biology") ||
    path.startsWith("/courses/biochemistry")
  )
    return faDna;
  if (path.startsWith("/courses/computer-science-1")) return faMicrochip;
  if (path.startsWith("/courses/general-chemistry")) return faFlaskVial;
  if (
    path.startsWith("/courses/mathematics") ||
    path.startsWith("/courses/biostatestics")
  )
    return faSquareRootVariable;
  if (
    path.startsWith("/courses/terminology") ||
    path.startsWith("/courses/pharmacy-training")
  )
    return faFilePrescription;
  if (path.startsWith("/courses/analytical-chemistry-1")) return faVial;
  if (path.startsWith("/courses/anatomy")) return faSkull;
  if (path.startsWith("/courses/organic-chemistry")) return faVials;
  if (path.startsWith("/courses/physical-pharmacy")) return faFilter;
  if (path.startsWith("/courses/analytical-chemistry-2"))
    return faVialCircleCheck;
  if (path.startsWith("/courses/physiology-1")) return faBrain;
  if (path.startsWith("/courses/microbiology")) return faBacterium;
  if (path.startsWith("/courses/physiology-2")) return faHeartPulse;
  if (path.startsWith("/courses/botany")) return faSeedling;
  if (path.startsWith("/courses/pharmaceutics-1")) return faPrescriptionBottle;
  if (path.startsWith("/courses/pathophysiology")) return faDisease;
  if (
    path.startsWith("/courses/pharmaceutics-2") ||
    path.startsWith("/courses/pharmaceutical-chem") ||
    path.startsWith("/courses/technology")
  )
    return faPills;
  if (
    path.startsWith("/courses/pharmacognosy") ||
    path.startsWith("/courses/phytotherapy")
  )
    return faMortarPestle;
  if (path.startsWith("/courses/pharmacokinetics")) return faCapsules;
  if (path.startsWith("/courses/pharmaceutics-3")) return faSyringe;
  if (
    path.startsWith("/courses/pharmacology") ||
    path.startsWith("/courses/pharmacotherapeutics") ||
    path.startsWith("/courses/drug-interactions")
  )
    return faTablets;
  if (path.startsWith("/courses/phytochemistry")) return faBong;
  if (path.startsWith("/courses/technical-instruments")) return faChartSimple;
  if (path.startsWith("/courses/first-aid")) return faBriefcaseMedical;
  if (path.startsWith("/courses/pharmaceutical-law")) return faScaleBalanced;
  if (path.startsWith("/courses/industrial-pharmacy")) return faIndustry;
  if (path.startsWith("/courses/public-health")) return faStaffAesculapius;
  if (
    path.startsWith("/courses/clinical-pharmacy") ||
    path.startsWith("/courses/hospital-pharmacy")
  )
    return faPrescriptionBottleMedical;
  if (path.startsWith("/courses/clinical-biochemistry")) return faMicroscope;
  if (
    path.startsWith("/courses/human-nutrition") ||
    path.startsWith("/courses/food-supplements")
  )
    return faPlateWheat;
  if (path.startsWith("/courses/toxicology")) return faBiohazard;
  if (path.startsWith("/courses/cosmetics")) return faHandDots;
  if (path === "/uni-needs") return faBuildingColumns;
  if (path === "/contact") return faHeadset;
  if (path === "/about") return faInfo;

  return faPrescription;
}
