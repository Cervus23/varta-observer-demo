export interface DiscretRange {
  rangeFrom: number;
  rangeTo: number;
}

export interface FiltersState {
  allGasTypes: string[];
  allUnits: string[];
  allDiscret: string[];
  allPeriod: string[];
  gasType: string;
  devices: string[];
  units: string;
  minValue: number;
  validDiscret: string[];
  discretRanges: DiscretRange[];
  discret: DiscretRange;
  period: number[];
  selectedDiscret: string;
  selectedPeriod: string;
  applyBtn: boolean;
}

export enum FiltersActionTypes {
  SET_GASTYPE = 'SET_GASTYPE',
  SET_DEVICES = 'SET_DEVICES',
  SET_UNITS = 'SET_UNITS',
  SET_VALUE = 'SET_VALUE',
  SET_VALID_DISCRET = 'SET_VALID_DISCRET',
  SET_DISCRET_RANGES = 'SET_DISCRET_RANGES',
  SET_DISCRET = 'SET_DISCRET',
  SET_PERIOD = 'SET_PERIOD',
  SET_SELECTED_DISCRET = 'SET_SELECTED_DISCRET',
  SET_SELECTED_PERIOD = 'SET_SELECTED_PERIOD',
  SET_APPLY_BUTTON = 'SET_APPLY_BUTTON',
}

interface SetGastype {
  type: FiltersActionTypes.SET_GASTYPE;
  payload: string;
}
interface SetDevices {
  type: FiltersActionTypes.SET_DEVICES;
  payload: string[];
}
interface SetUnits {
  type: FiltersActionTypes.SET_UNITS;
  payload: string;
}
interface SetValue {
  type: FiltersActionTypes.SET_VALUE;
  payload: number;
}
interface SetValidDiscret {
  type: FiltersActionTypes.SET_VALID_DISCRET;
  payload: number;
}
interface SetDiscretRanges {
  type: FiltersActionTypes.SET_DISCRET_RANGES;
  payload: DiscretRange[];
}
interface SetDiscret {
  type: FiltersActionTypes.SET_DISCRET;
  payload: DiscretRange;
}
interface SetPeriod {
  type: FiltersActionTypes.SET_PERIOD;
  payload: number[];
}
interface SetSelectedDiscret {
  type: FiltersActionTypes.SET_SELECTED_DISCRET;
  payload: string;
}
interface SetSelectedPeriod {
  type: FiltersActionTypes.SET_SELECTED_PERIOD;
  payload: string;
}
interface SetApplyButton {
  type: FiltersActionTypes.SET_APPLY_BUTTON;
  payload: boolean;
}

export type FiltersAction =
  | SetGastype
  | SetDevices
  | SetUnits
  | SetValue
  | SetValidDiscret
  | SetDiscretRanges
  | SetDiscret
  | SetPeriod
  | SetSelectedDiscret
  | SetSelectedPeriod
  | SetApplyButton;
