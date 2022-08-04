import {
  mdiDelete,
  mdiCloseCircle,
  mdiChevronUp,
  mdiChevronDown,
} from "@mdi/js";

export const getIcon = (path: string) => {
  switch (path) {
    case "close":
      return mdiCloseCircle;
    case "delete":
      return mdiDelete;
    case "maximize":
      return mdiChevronDown;
    case "minimize":
      return mdiChevronUp;
    default:
      return "";
  }
};
