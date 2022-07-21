import {
  DevicesState,
  DevicesAction,
  DevicesActionTypes,
} from "../../types/devices.ts";

const initialState: DevicesState = {
  availableDevices: [],
  activeDevices: [],
};

const devicesReducer = (state = initialState, action: DevicesAction) => {
  switch (action.type) {
    case DevicesActionTypes.GET_AVAILABLE_DEVICES: {
      return { ...state, availableDevices: action.payload };
    }
    case DevicesActionTypes.SET_ACTIVE_DEVICES: {
      return { ...state, activeDevices: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default devicesReducer;
