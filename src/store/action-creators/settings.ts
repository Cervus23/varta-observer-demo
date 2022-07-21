import { SettingsActionTypes } from "../../types/settings.ts";

export const setLanguage = (language: string) => {
  return { type: SettingsActionTypes.SET_LANGUAGE, payload: language };
};
export const setConnection = (connection: string) => {
  return { type: SettingsActionTypes.SET_CONNECTION, payload: connection };
};
export const setMode = (mode: string) => {
  return { type: SettingsActionTypes.SET_MODE, payload: mode };
};
