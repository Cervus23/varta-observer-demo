export interface LoadingState {
  isLoadingActive: boolean;
}

export enum LoadingActionTypes {
  TOGGLE_LOADING = 'TOGGLE_LOADING',
}

export interface ToggleLoading {
  type: LoadingActionTypes.TOGGLE_LOADING;
  payload: boolean;
}

export type LoadingAction = ToggleLoading;
