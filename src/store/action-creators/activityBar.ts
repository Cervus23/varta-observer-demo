import { ActivityBarActionTypes } from "../../types/activityBar.ts";

export const toggleFilters = () => {
  return { type: ActivityBarActionTypes.TOGGLE_FILTERS };
};

export const toggleInfoBlock = () => {
  return { type: ActivityBarActionTypes.TOGGLE_INFOBLOCK };
};
