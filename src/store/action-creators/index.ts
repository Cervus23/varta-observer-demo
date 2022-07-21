import * as PointsActionCreators from "./points.ts";
import * as FiltersActionCreators from "./filters.ts";
import * as ActivePointsActionCreators from "./activePoint.ts";
import * as LoadingScreenActionTypes from "./loadingScreen.ts";
import * as SettingsActionTypes from "./settings.ts";
import * as ActivityBarActionTypes from "./activityBar.ts";
import * as ModalWindowActionTypes from "./modalWindow.ts";

export default {
  ...PointsActionCreators,
  ...FiltersActionCreators,
  ...ActivePointsActionCreators,
  ...LoadingScreenActionTypes,
  ...SettingsActionTypes,
  ...ActivityBarActionTypes,
  ...ModalWindowActionTypes,
};
