/* eslint-disable import/prefer-default-export */
import { PointsAction, PointsActionTypes } from "../../types/points.ts";

export const setInfoId = (infoId: string): PointsAction => {
  return { type: PointsActionTypes.SET_INFO_ID, payload: infoId };
};
