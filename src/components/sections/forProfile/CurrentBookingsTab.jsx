import React from "react";
import axiosInstance from "../../../services/axios";
import Loader from "../../shared/Loader";
import BookingCard from "../forPlaces/BookingCard";
import { useUserBookings } from "../../../hooks/useUserBookings";
import toast from 'react-hot-toast';

const CurrentBookingsTab = () => {
  const { bookings: currentBookings, setBookings: setCurrentBookings, loading } =
  useUserBookings("/api/users/current-bookings");


  const bookingCancel = async (id) => {
    try {
      await axiosInstance.patch(`/api/bookings/${id}/cancel`);
      
      setCurrentBookings((prev) => prev.filter((booking) => booking.id !== id));
      toast.success(`Бронирование отменено успешно`);
    } catch (error) {
      console.error("Ошибка при отмене бронирования:", error);
      toast.error("Ошибка при отмене бронирования. Попробуйте снова.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Текущие бронирования</h2>

      {loading ? <Loader/> : ( currentBookings.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">У вас нет активных бронирований</p>
        </div>
      ) : (
        <div className="space-y-4">
          {currentBookings.map((booking) => (
            <BookingCard
            key={booking.id}
            booking={booking}
            status="active"
            onCancel={bookingCancel}
          />
          ))}
        </div>
      ))}
      
     
    </div>
  );
};

export default CurrentBookingsTab; 