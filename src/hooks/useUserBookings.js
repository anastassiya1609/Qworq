import { useState, useEffect } from "react";
import axiosInstance from "../services/axios";

export const useUserBookings = (endpoint) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      try {
        setLoading(true);
        const res = await axiosInstance.get(endpoint);
        setBookings(res.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, [endpoint]);

  return { bookings, setBookings, loading };
};
