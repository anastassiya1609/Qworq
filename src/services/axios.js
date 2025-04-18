import axios from "axios";
import Cookies from 'js-cookie';

// Создаем экземпляр axios с базовым URL
export const axiosInstance = axios.create({
    baseURL: "https://backend-project-gt8h.onrender.com",
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {

        const token = Cookies.get('token');
    
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
          }
          return config;
          
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;