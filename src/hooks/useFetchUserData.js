import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../store/slices/authSlice';
import { axiosInstance } from '../services/axios';

const useFetchUserData = () => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token, dispatch]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/api/users/profile");

      if (response.status === 200) {
        const data = response.data;
        
        setUserData({
          name: data.name,
          phone: data.phone,
        });

        dispatch(updateUser(data));
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных пользователя:", error);
      if (error.response?.status === 404) {
        navigate('/404');
      }
    } finally {
      setLoading(false);
    }
  };

  return { userData, setUserData, loading, fetchUserData };
};

export default useFetchUserData; 