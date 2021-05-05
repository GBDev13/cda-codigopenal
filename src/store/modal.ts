import { createSlice } from "@reduxjs/toolkit";
import { ICodigo } from "./types";

const slice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    isEdditing: false,
    isConfirmationOpen: false,
    currentItem: [] as ICodigo,
  },
  reducers: {
    abrirModal(state) {
      state.isOpen = true
    },
    fecharModal(state) {
      state.isOpen = false
    },
    abrirEdicao(state) {
      state.isEdditing = true
    },
    fecharEdicao(state) {
      state.isEdditing = false
    },
    abrirModalConfirmação(state) {
      state.isConfirmationOpen = true
    },
    fecharModalConfirmação(state) {
      state.isConfirmationOpen = false
    },
    setCurrentItem(state, action) {
      state.currentItem = action.payload;
    }
  }
})

export const { abrirModal, fecharModal, setCurrentItem, abrirModalConfirmação, fecharModalConfirmação, abrirEdicao, fecharEdicao } = slice.actions;
export default slice.reducer;