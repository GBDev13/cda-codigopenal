import { createSlice, Dispatch } from "@reduxjs/toolkit";
import api from "../services/api";
import { fecharModal } from "./modal";
import { ICodigo, IStatus, ICodigos } from "./types";

const slice = createSlice({
  name: 'codigos',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {
    fetchStarted(state: ICodigos) {
      state.loading = true;
    },
    fetchSuccess(state: ICodigos, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError(state: ICodigos, action) {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
    removerCodigo(state: ICodigos, action) {
      state.data = state.data.filter(codigo => codigo.id !== action.payload);
    },

    
    fetchCriarStarted(state: ICodigos) {
      state.loading = true;
    },
    fetchCriarSuccess(state: ICodigos, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchCriarError(state: ICodigos, action) {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },

    
    fetchEditarStarted(state: ICodigos) {
      state.loading = true;
    },
    fetchEditarSuccess(state: ICodigos, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchEditarError(state: ICodigos, action) {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

const {
  fetchStarted,
  fetchSuccess,
  fetchError,
  fetchCriarStarted,
  fetchCriarSuccess,
  fetchCriarError,
  fetchEditarStarted,
  fetchEditarSuccess,
  fetchEditarError
} = slice.actions;

export const { removerCodigo } = slice.actions;

export const carregarCodigos = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchStarted());

    const response = await api.get('/codigopenal')
    const { data } = response;

    const resposeStatus = await api.get('/status');
    const { data: allStatus } = resposeStatus;

    const codigos = data.map((codigo: ICodigo) => {
      return {
        ...codigo,
        statusDescricao: allStatus.filter((status: IStatus) => status.id === codigo.status)[0].descricao
      }
    })

    return dispatch(fetchSuccess(codigos))
  } catch (error) {
    return dispatch(fetchError('Ocorreu um erro ao carregar os códigos penais'))
  }
};

export const criarCodigo = (codigo: ICodigo) => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch(fetchCriarStarted());

    const response = await api.post('/codigopenal', {
      ...codigo,
      tempoPrisao: Number(codigo.tempoPrisao),
      multa: Number(codigo.multa),
    })

    const resposeStatus = await api.get('/status');
    const { data: allStatus } = resposeStatus;

    const { data } = response;
    const { codigos } = getState();

    const codigosNovos = [...codigos.data, {
      ...data,
      dataCriacao: String(new Date()),
      statusDescricao: allStatus.filter((status: IStatus) => status.id === data.status)[0].descricao
    }]

    dispatch(fecharModal())

    return dispatch(fetchCriarSuccess(codigosNovos))
  } catch (error) {
    return dispatch(fetchCriarError('Ocorreu um erro ao carregar os códigos penais'))
  }
};

export const editarCodigo = (codigo: ICodigo, codigoId:number | undefined) => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch(fetchEditarStarted());

    const { codigos } = getState();

    const response = await api.put(`/codigopenal/${codigoId}`, {
      ...codigo,
      tempoPrisao: Number(codigo.tempoPrisao),
      multa: Number(codigo.multa),
      dataCriacao: String(new Date()),
    })

    const resposeStatus = await api.get('/status');
    const { data: allStatus } = resposeStatus;

    const { data } = response;

    const codigosNovos = codigos.data.map((item: ICodigo) => {
      if(item.id !== codigoId) {
        return {
          ...item
        }
      } else {
        return {
          ...codigo,
          id: data.id,
          statusDescricao: allStatus.filter((status: IStatus) => status.id === data.status)[0].descricao,
          tempoPrisao: Number(data.tempoPrisao),
          multa: Number(data.multa),
        }
      }
    })

    dispatch(fecharModal())

    console.log(codigosNovos)

    return dispatch(fetchEditarSuccess(codigosNovos))
  } catch (error) {
    return dispatch(fetchEditarError('Ocorreu um erro ao editar os códigos penais'))
  }
};

export default slice.reducer;