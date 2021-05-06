import { DefaultRootState } from "react-redux";


export interface IUser {
  id: string;
  nome: string;
  senha: string;
};

export interface ILogin {
  data: IUser | null;
  error: string | null;
  loading: boolean | null;
}

export interface ICodigo {
  id?: number;
  nome?: string;
  descricao?: string;
  multa?: number;
  tempoPrisao?: number;
  status?: number;
  statusDescricao?: string;
  dataCriacao?: string;
  dataFormatada?: string;
}

export interface ICodigos {
  data: ICodigo[] | [];
  error: string | null;
  loading: boolean | null;
}

export interface IStatus {
  id: number;
  descricao: string;
}

export interface IModal {
  isOpen: boolean,
  isEdditing: boolean,
  currentItem: ICodigo,
  isConfirmationOpen: boolean,
}

export interface IFiltros {
  busca: string | null,
  status: string | null,
  ordem: string | null,
  isResetting: boolean,
}

export interface IState extends DefaultRootState {
  login: ILogin;
  modal: IModal;
  codigos: ICodigos;
  filtros: IFiltros;
}

export interface ILocalStorage {
  key: string;
  value: IUser;
}