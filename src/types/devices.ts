export interface DevicesState {
  availableDevices: string[];
  activeDevices: string[];
}

export enum DevicesActionTypes {
  GET_AVAILABLE_DEVICES = 'GET_AVAILABLE_DEVICES',
  SET_ACTIVE_DEVICES = 'SET_ACTIVE_DEVICES',
}

interface GetAvailableDevices {
  type: DevicesActionTypes.GET_AVAILABLE_DEVICES;
  payload: string[];
}

interface SetActiveDevices {
  type: DevicesActionTypes.SET_ACTIVE_DEVICES;
  payload: string[];
}

export type DevicesAction = GetAvailableDevices | SetActiveDevices;
