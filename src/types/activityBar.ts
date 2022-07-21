export interface ActivityBarState {
  isFiltersActive: boolean;
  isInfoBlockActive: boolean;
}

export enum ActivityBarActionTypes {
  TOGGLE_FILTERS = 'TOGGLE_FILTERS',
  TOGGLE_INFOBLOCK = 'TOGGLE_INFOBLOCK',
}

export interface ToggleFilters {
  type: ActivityBarActionTypes.TOGGLE_FILTERS;
}

export interface ToggleInfoBlock {
  type: ActivityBarActionTypes.TOGGLE_INFOBLOCK;
}

export type ActivityBarAction = ToggleFilters | ToggleInfoBlock;
