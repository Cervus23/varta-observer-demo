import { DevicesActionTypes } from "../../types/devices.ts";

export const getAvailableDevices = (availableDevices: string[]) => {
  return {
    type: DevicesActionTypes.GET_AVAILABLE_DEVICES,
    payload: availableDevices,
  };
};

export const setActiveDevices = (activeDevices: boolean) => {
  return {
    type: DevicesActionTypes.SET_ACTIVE_DEVICES,
    payload: activeDevices,
  };
};
