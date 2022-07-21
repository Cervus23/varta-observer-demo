import {
  ActivityBarActionTypes,
  ActivityBarAction,
  ActivityBarState,
} from "../../types/activityBar.ts";

const initialState: ActivityBarState = {
  isFiltersActive: true,
  isInfoBlockActive: true,
};

const activityBarReducer = (
  state = initialState,
  action: ActivityBarAction
) => {
  switch (action.type) {
    case ActivityBarActionTypes.TOGGLE_FILTERS: {
      return { ...state, isFiltersActive: !state.isFiltersActive };
    }
    case ActivityBarActionTypes.TOGGLE_INFOBLOCK: {
      return { ...state, isInfoBlockActive: !state.isInfoBlockActive };
    }
    default: {
      return state;
    }
  }
};

export default activityBarReducer;
