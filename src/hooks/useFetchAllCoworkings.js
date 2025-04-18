import { useEffect, useState } from "react";
import axiosInstance from "../services/axios";


export default function useFetchAllCoworkings() {
  
      const [loading, setLoading] = useState(true);
      const [coworkingSpaces, setCoworkingSpaces] = useState([]);

    useEffect(() => {
        const fetchCoworkingsData = async () => {
          
          try {
            setLoading(true);
            const response = await axiosInstance.get("/api/coworkings");
            console.log(response.data)
            setCoworkingSpaces(response.data);
          } catch (error) {
            console.error("Ошибка при загрузке данных всех коворкингов:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchCoworkingsData();
      }, []);
          
    
        return { loading, coworkingSpaces };
}
