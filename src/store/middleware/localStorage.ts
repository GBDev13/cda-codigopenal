import { Middleware } from "redux";

const localStorage: Middleware = (store) => (next) => (action) => {
  const response = next(action);

  const { meta } = action;

  if(meta && meta.localStorage) {
    const { key, value } = meta.localStorage;
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  return response;
}

export default localStorage;