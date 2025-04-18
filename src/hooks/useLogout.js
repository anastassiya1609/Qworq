import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice"; 
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from "../services/axios";

export const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    return async () => {
      try {
        await axiosInstance.post('/api/auth/logout'); 
      } catch (error) {
        console.error("Ошибка при выходе:", error?.response?.data || error.message);
      } finally {
        dispatch(logout());
        navigate('/');
      }
    };
  };
