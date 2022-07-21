/* eslint-disable import/prefer-default-export */
import { LoadingActionTypes } from "../../types/loadingScreen.ts";

export const toggleLoading = (isLoadingActive: boolean) => {
  return { type: LoadingActionTypes.TOGGLE_LOADING, payload: isLoadingActive };
};
