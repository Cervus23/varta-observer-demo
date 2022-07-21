import {
  SettingsState,
  SettingsAction,
  SettingsActionTypes,
} from "../../types/settings.ts";
// import { setSettings } from "../../renderer/settingsAPI";

const initialState: SettingsState = {
  language: "uk",
  connection: "unknown",
  mode: "auth",
};

const settingsReducer = (state = initialState, action: SettingsAction) => {
  switch (action.type) {
    case SettingsActionTypes.SET_LANGUAGE: {
      const updatedSettings = {
        language: action.payload,
      };

      // setSettings(updatedSettings);
      return {
        ...state,
        language: action.payload,
      };
    }
    case SettingsActionTypes.SET_CONNECTION: {
      return { ...state, connection: action.payload };
    }
    case SettingsActionTypes.SET_MODE: {
      return { ...state, mode: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { settingsReducer, initialState };
