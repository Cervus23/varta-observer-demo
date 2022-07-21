import {
  FiltersActionTypes,
  FiltersAction,
  FiltersState,
} from "../../types/filters.ts";

const initialState: FiltersState = {
  allGasTypes: ["METHANE", "PROPANE"],
  allUnits: ["ppm", "vol", "lfl"],
  allDiscret: ["month", "week", "day", "none"],
  allPeriod: ["all", "today", "week", "month", "year", "set"],
  gasType: "METHANE",
  devices: [],
  units: "ppm",
  minValue: 0,
  validDiscret: ["month", "week", "day", "none"],
  discretRanges: [],
  discret: { rangeFrom: 0, rangeTo: 0 },
  period: [],
  selectedDiscret: "none",
  selectedPeriod: "all",
  applyBtn: false,
};

const filtersReducer = (state = initialState, action: FiltersAction) => {
  switch (action.type) {
    case FiltersActionTypes.SET_GASTYPE: {
      return { ...state, gasType: action.payload };
    }
    case FiltersActionTypes.SET_DEVICES: {
      return { ...state, devices: action.payload };
    }
    case FiltersActionTypes.SET_UNITS: {
      return { ...state, units: action.payload };
    }
    case FiltersActionTypes.SET_VALUE: {
      return { ...state, minValue: action.payload };
    }
    case FiltersActionTypes.SET_VALID_DISCRET: {
      const updatedValidDiscret = [...initialState.validDiscret];

      if (action.payload > 0) {
        for (let i = 0; i < action.payload; i += 1) {
          updatedValidDiscret[i] = "disabled";
        }
      }

      return { ...state, validDiscret: updatedValidDiscret };
    }
    case FiltersActionTypes.SET_DISCRET_RANGES: {
      return { ...state, discretRanges: action.payload };
    }
    case FiltersActionTypes.SET_DISCRET: {
      return { ...state, discret: action.payload };
    }
    case FiltersActionTypes.SET_PERIOD: {
      return { ...state, period: action.payload };
    }
    case FiltersActionTypes.SET_SELECTED_DISCRET: {
      return { ...state, selectedDiscret: action.payload };
    }
    case FiltersActionTypes.SET_SELECTED_PERIOD: {
      return { ...state, selectedPeriod: action.payload };
    }
    case FiltersActionTypes.SET_APPLY_BUTTON: {
      return { ...state, applyBtn: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default filtersReducer;
