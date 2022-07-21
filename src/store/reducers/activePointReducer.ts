import { PointsActionTypes, PointsAction } from "../../types/points.ts";

const initialState: { infoId: string } = {
  infoId: "",
};

const activePointReducer = (state = initialState, action: PointsAction) => {
  switch (action.type) {
    case PointsActionTypes.SET_INFO_ID: {
      return { ...state, infoId: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default activePointReducer;
