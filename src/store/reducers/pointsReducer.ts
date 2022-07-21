import {
  PointsActionTypes,
  PointsAction,
  PointsState,
} from "../../types/points.ts";

const initialState: PointsState = {
  path: "",
  hasToConnect: true,
  loaded: false,
  allPoints: [],
  activePoints: [],
  filteredPoints: [],
  discretPoints: [],
  focusPoint: {
    latValue: 0,
    lngValue: 0,
    date: 0,
    gasType: "",
    gasValue: 0,
    gasUnits: "",
    ID: "",
    icon: "blue",
    zIndex: -1,
    deviceId: "undefined",
  },
};

const pointsReducer = (state = initialState, action: PointsAction) => {
  switch (action.type) {
    case PointsActionTypes.SET_PATH: {
      return { ...state, path: action.payload };
    }
    case PointsActionTypes.TOGGLE_LOADED: {
      return { ...state, loaded: action.payload };
    }
    case PointsActionTypes.SET_ALL_POINTS: {
      return { ...state, allPoints: action.payload };
    }
    case PointsActionTypes.SET_POINTS: {
      return { ...state, activePoints: action.payload };
    }
    case PointsActionTypes.SET_ACTIVE_POINTS: {
      return { ...state, activePoints: action.payload };
    }
    case PointsActionTypes.SET_FILTERED_POINTS: {
      return { ...state, filteredPoints: action.payload };
    }
    case PointsActionTypes.SET_DISCRET_POINTS: {
      return { ...state, discretPoints: action.payload };
    }
    case PointsActionTypes.SET_FOCUS_POINT: {
      return { ...state, focusPoint: action.payload };
    }
    case PointsActionTypes.SET_CONNECTION_NEED: {
      return { ...state, hasToConnect: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default pointsReducer;
