import { createSlice } from "@reduxjs/toolkit";
import { IFiltros } from './types';

const initialState: IFiltros = {
  busca: null,
  status: null,
  ordem: null,
  isResetting: false
}

const slice = createSlice({
  name: 'filtros',
  initialState,
  reducers: {
    setBusca(state, action) {
      state.busca = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setOrdem(state, action) {
      state.ordem = action.payload;
    },
    toggleResetando(state) {
      state.isResetting = !state.isResetting;
    },
  }
})

export const { setBusca, setStatus, setOrdem, toggleResetando } = slice.actions;
export default slice.reducer;