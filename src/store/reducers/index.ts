import { combineReducers } from "redux";
//@ts-ignore all
import pointsReducer from "./pointsReducer.ts";
import filtersReducer from "./filtersReducer.ts";
import activePointReducer from "./activePointReducer.ts";
import loadingScreenReducer from "./loadingScreenReducer.ts";
import { settingsReducer } from "./settingsReducer.ts";
import activityBarReducer from "./activityBarReducer.ts";
import devicesReducer from "./devicesReducer.ts";
import modalWindowReducer from "./modalWindowReducer.ts";

export const rootReducer = combineReducers({
  points: pointsReducer,
  filters: filtersReducer,
  activePoint: activePointReducer,
  loadingScreen: loadingScreenReducer,
  settings: settingsReducer,
  activityBar: activityBarReducer,
  devices: devicesReducer,
  modalWindow: modalWindowReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
