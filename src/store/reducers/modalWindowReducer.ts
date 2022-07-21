import {
  ModalWindowState,
  ModalWindowAction,
  ModalWindowActionTypes,
} from "../../types/modalWindow.ts";

const initialState: ModalWindowState = {
  isShown: false,
  modalText: "",
};

const modalWindowReducer = (
  state = initialState,
  action: ModalWindowAction
) => {
  switch (action.type) {
    case ModalWindowActionTypes.SHOW_MODAL: {
      return { ...state, isShown: action.payload };
    }
    case ModalWindowActionTypes.SET_MODAL_TEXT: {
      return { ...state, modalText: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default modalWindowReducer;
