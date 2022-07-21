export interface SettingsState {
  language: string;
  connection: string;
  mode: string;
}

export enum SettingsActionTypes {
  SET_LANGUAGE = 'SET_LANGUAGE',
  SET_CONNECTION = 'SET_CONNECTION',
  SET_MODE = 'SET_MODE',
}

export interface SetLanguage {
  type: SettingsActionTypes.SET_LANGUAGE;
  payload: string;
}
export interface SetConnection {
  type: SettingsActionTypes.SET_CONNECTION;
  payload: string;
}
export interface SetMode {
  type: SettingsActionTypes.SET_MODE;
  payload: string;
}

export type SettingsAction = SetLanguage | SetConnection | SetMode;
