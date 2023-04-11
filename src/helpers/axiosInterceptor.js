import axios from 'axios';
import env from '../config/env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosIntance = axios.create({
  baseURL: env.BASE_URL,
});

const setAuthToken = async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    axiosIntance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

axiosIntance.interceptors.request.use(
  async config => {
    await setAuthToken();
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosIntance;
