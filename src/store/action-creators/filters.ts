import {
  FiltersActionTypes,
  FiltersAction,
  DiscretRange,
} from "../../types/filters.ts";

export const setGastype = (gasType: string): FiltersAction => {
  return { type: FiltersActionTypes.SET_GASTYPE, payload: gasType };
};

export const setDevices = (devices: string[]): FiltersAction => {
  return { type: FiltersActionTypes.SET_DEVICES, payload: devices };
};

export const setUnits = (units: string): FiltersAction => {
  return { type: FiltersActionTypes.SET_UNITS, payload: units };
};

export const setValue = (value: number): FiltersAction => {
  return { type: FiltersActionTypes.SET_VALUE, payload: value };
};

export const setValidDiscret = (upto: number): FiltersAction => {
  return { type: FiltersActionTypes.SET_VALID_DISCRET, payload: upto };
};

export const setDiscretRanges = (
  discretRanges: DiscretRange[]
): FiltersAction => {
  return {
    type: FiltersActionTypes.SET_DISCRET_RANGES,
    payload: discretRanges,
  };
};

export const setDiscret = (discret: DiscretRange): FiltersAction => {
  return { type: FiltersActionTypes.SET_DISCRET, payload: discret };
};

export const setPeriod = (period: number[]): FiltersAction => {
  return { type: FiltersActionTypes.SET_PERIOD, payload: period };
};

export const setSelectedDiscret = (selectedDiscret: string): FiltersAction => {
  return {
    type: FiltersActionTypes.SET_SELECTED_DISCRET,
    payload: selectedDiscret,
  };
};

export const setSelectedPeriod = (selectedPeriod: string): FiltersAction => {
  return {
    type: FiltersActionTypes.SET_SELECTED_PERIOD,
    payload: selectedPeriod,
  };
};

export const setApplyButton = (applyBtn: boolean): FiltersAction => {
  return {
    type: FiltersActionTypes.SET_APPLY_BUTTON,
    payload: applyBtn,
  };
};
