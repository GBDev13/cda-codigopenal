import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import api from "../services/api";
import getLocalStorage from "./helper/getLocalStorage";

const slice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    data: getLocalStorage('user', null),
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess: {
      reducer(state, action: PayloadAction<any, any, any>) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: {
              key: 'user',
              value: {...payload}
            }
          }
        }
      }
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

interface User {
  usuario: string;
  senha: string;
}

export const fetchUser = (user: User) => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchStarted());

    const response = await api.get('/usuarios', {  params: { nome: user.usuario } })
    const { data } = response;

    if (data.length < 0) {
      return dispatch(fetchError('Ocorreu um erro ao fazer login'))
    }

    const { id, nome, senha } = data[0];

    if (user.senha !== senha) {
      return dispatch(fetchError('Usuário ou senha incorretos'))
    }

    return dispatch(fetchSuccess({ id, nome }))
  } catch (error) {
    return dispatch(fetchError('Ocorreu um erro ao fazer login'))
  }
};

export default slice.reducer;