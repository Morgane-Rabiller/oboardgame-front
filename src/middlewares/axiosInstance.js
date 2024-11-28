import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://oboardgame-back.mogo-r.fr',
  // baseURL: 'http://localhost:8080',
  withCredentials: true,
});

export default axiosInstance;