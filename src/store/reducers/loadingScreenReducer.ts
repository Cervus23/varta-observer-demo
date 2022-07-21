import {
  LoadingState,
  LoadingAction,
  LoadingActionTypes,
} from "../../types/loadingScreen.ts";

const initialState: LoadingState = {
  isLoadingActive: false,
};

const loadingReducer = (state = initialState, action: LoadingAction) => {
  switch (action.type) {
    case LoadingActionTypes.TOGGLE_LOADING: {
      return { ...state, isLoadingActive: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default loadingReducer;
