export interface ModalWindowState {
  isShown: boolean;
  modalText: string;
}

export enum ModalWindowActionTypes {
  SHOW_MODAL = 'SHOW_MODAL',
  SET_MODAL_TEXT = 'SET_MODAL_TEXT',
}

export interface ShowModal {
  type: ModalWindowActionTypes.SHOW_MODAL;
  payload: boolean;
}

export interface SetModalText {
  type: ModalWindowActionTypes.SET_MODAL_TEXT;
  payload: string;
}

export type ModalWindowAction = ShowModal | SetModalText;
