import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://oboardgame-back.mogo-r.fr',
  withCredentials: true,
});

export default axiosInstance;