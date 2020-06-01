import axios from 'axios';
import consts from '../consts';

const api = axios.create({
  baseURL: consts.API_URL,
  headers: {
    common: {
      Authorization: `Bearer ${consts.API_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
},
})
export default api;