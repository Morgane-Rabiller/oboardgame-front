import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  // baseURL: 'https://oboardgame-back.mogo-r.fr',
});

export default axiosInstance;