import { useEffect, useState } from "react";
import axiosInstance from "../services/axios";

export const useCoworkingDetail = (id) => {
    const [singleCoworkingData, setSingleCoworkingData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (!id) return; // Без id ничего не делаем
  
      const fetchCoworking = async () => {
        try {
          const res = await axiosInstance.get(`/api/coworkings/${id}`);
          setSingleCoworkingData(res.data);
        } catch (error) {
          console.error("Ошибка при загрузке данных коворкинга:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCoworking();
    }, [id]);
  
    return { singleCoworkingData, loading };
  };
  
