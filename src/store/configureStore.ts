import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import login from './login';
import modal from './modal';
import codigos from './codigos';
import filtros from './filtros';
import localStorage from "./middleware/localStorage";

const middleware = [...getDefaultMiddleware(), localStorage];

const reducer = combineReducers({ login, modal, codigos, filtros })
const store = configureStore({ reducer, middleware })

export default store;