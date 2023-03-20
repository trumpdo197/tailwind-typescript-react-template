import axios from 'axios';

export const setupAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
};

export default setupAxios;
