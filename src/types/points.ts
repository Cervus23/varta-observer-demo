export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Point {
  satelliteCode: string;
  status: string;
  latValue: number;
  latSide: string;
  lngValue: number;
  lngSide: string;
  speed: string;
  angle: string;
  date: number;
  magneticVariat: string;
  magneticDirect: string;
  sensorCode: string;
  satelliteHash: string;
  sensorId: string;
  gasType: string;
  gasValue: number;
  gasUnits: string;
  sensorHash: string;
  ID: string;
  icon: string;
  zIndex: number;
}

export interface LightPoint {
  latValue: number;
  lngValue: number;
  date: number;
  gasType: string;
  gasValue: number;
  gasUnits: string;
  ID: string;
  icon: string;
  zIndex: number;
  deviceId: string;
}

export interface RawPoint {
  date: string;
  device_id: string;
  gas_type: string;
  gas_units: string;
  gas_value: number;
  icon: string;
  id: string;
  lat_value: number;
  lng_value: number;
  status: string;
  z_index: number;
}

export interface FilterQuery {
  devices: string[];
  gasType: string;
  minValue: number;
  period: number[];
}

export interface PointsState {
  path: string;
  hasToConnect: boolean;
  loaded: boolean;
  allPoints: Point[];
  activePoints: LightPoint[];
  filteredPoints: LightPoint[];
  discretPoints: LightPoint[];
  focusPoint: LightPoint;
}

export enum PointsActionTypes {
  SET_PATH = 'SET_PATH',
  TOGGLE_LOADED = 'TOGGLE_LOADED',
  SET_ALL_POINTS = 'SET_ALL_POINTS',
  SET_POINTS = 'SET_POINTS',
  SET_ACTIVE_POINTS = 'SET_ACTIVE_POINTS',
  SET_FILTERED_POINTS = 'SET_FILTERED_POINTS',
  SET_DISCRET_POINTS = 'SET_DISCRET_POINTS',
  SET_FOCUS_POINT = 'SET_FOCUS_POINT',
  SET_INFO_ID = 'SET_INFO_ID',
  SET_CONNECTION_NEED = 'SET_CONNECTION_NEED',
}

interface SetPath {
  type: PointsActionTypes.SET_PATH;
  payload: string;
}
interface ToggleLoad {
  type: PointsActionTypes.TOGGLE_LOADED;
  payload: boolean;
}
interface SetAllPoints {
  type: PointsActionTypes.SET_ALL_POINTS;
  payload: Point[];
}
interface SetPoints {
  type: PointsActionTypes.SET_POINTS;
  payload: LightPoint[];
}
interface SetActivePoints {
  type: PointsActionTypes.SET_ACTIVE_POINTS;
  payload: LightPoint[];
}
interface SetFilteredPoints {
  type: PointsActionTypes.SET_FILTERED_POINTS;
  payload: LightPoint[];
}
interface SetDiscretPoints {
  type: PointsActionTypes.SET_DISCRET_POINTS;
  payload: LightPoint[];
}
interface SetFocusPoint {
  type: PointsActionTypes.SET_FOCUS_POINT;
  payload: LightPoint;
}
interface SetInfoId {
  type: PointsActionTypes.SET_INFO_ID;
  payload: string;
}
interface SetConnectionNeed {
  type: PointsActionTypes.SET_CONNECTION_NEED;
  payload: boolean;
}

export type PointsAction =
  | SetPath
  | ToggleLoad
  | SetAllPoints
  | SetPoints
  | SetActivePoints
  | SetFilteredPoints
  | SetDiscretPoints
  | SetFocusPoint
  | SetInfoId
  | SetConnectionNeed;
