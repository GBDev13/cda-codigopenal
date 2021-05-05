import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'filtros',
  initialState: {
    busca: null,
    status: null,
    ordem: null,
  },
  reducers: {
    setBusca(state, action) {
      state.busca = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setOrdem(state, action) {
      console.log('PASSO 1 - definiu', action.payload)
      state.ordem = action.payload;
    },
  }
})

export const { setBusca, setStatus, setOrdem } = slice.actions;
export default slice.reducer;