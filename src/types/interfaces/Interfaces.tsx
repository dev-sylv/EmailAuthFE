export interface iButton {
  Buttontittle: string;
  bg: string;
  cc: string;
  onClick: () => void;
}

export interface iCard {
  tittle: string;
  Buttontittle: string;
  onClick: () => void;
}

export interface iInput {
  tittle: string;
  request: boolean;
  sign: boolean;
}
