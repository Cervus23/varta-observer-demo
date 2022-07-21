import {
  LightPoint,
  Point,
  PointsAction,
  PointsActionTypes,
} from "../../types/points.ts";

export const setPath = (path: string): PointsAction => {
  return { type: PointsActionTypes.SET_PATH, payload: path };
};

export const toggleLoad = (loaded: boolean): PointsAction => {
  return { type: PointsActionTypes.TOGGLE_LOADED, payload: loaded };
};

export const setAllPoints = (points: Point[]): PointsAction => {
  return { type: PointsActionTypes.SET_ALL_POINTS, payload: points };
};

export const setPoints = (points: LightPoint[]): PointsAction => {
  return { type: PointsActionTypes.SET_POINTS, payload: points };
};

export const setActivePoints = (points: LightPoint[]): PointsAction => {
  return { type: PointsActionTypes.SET_ACTIVE_POINTS, payload: points };
};

export const setFilteredPoints = (points: LightPoint[]): PointsAction => {
  return { type: PointsActionTypes.SET_FILTERED_POINTS, payload: points };
};

export const setDiscretPoints = (points: LightPoint[]): PointsAction => {
  return { type: PointsActionTypes.SET_DISCRET_POINTS, payload: points };
};

export const setFocusPoint = (focusPoint: LightPoint): PointsAction => {
  return { type: PointsActionTypes.SET_FOCUS_POINT, payload: focusPoint };
};

export const setConnectionNeed = (hasToConnect: boolean): PointsAction => {
  return { type: PointsActionTypes.SET_CONNECTION_NEED, payload: hasToConnect };
};
