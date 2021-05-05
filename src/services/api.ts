import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/cidadealta/exercise',
})

export default api;