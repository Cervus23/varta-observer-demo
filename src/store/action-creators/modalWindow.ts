import { ModalWindowActionTypes } from "../../types/modalWindow.ts";

export const showModal = (show: boolean) => {
  return { type: ModalWindowActionTypes.SHOW_MODAL, payload: show };
};

export const setModalText = (modalText: string) => {
  return {
    type: ModalWindowActionTypes.SET_MODAL_TEXT,
    payload: modalText,
  };
};
