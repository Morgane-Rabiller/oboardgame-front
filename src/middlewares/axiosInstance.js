import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://oboardgame-back.mogo-r.fr',
});

export default axiosInstance;