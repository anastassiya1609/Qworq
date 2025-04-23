import React from "react";
import Loader from "../../shared/Loader";
import BookingCard from "../forPlaces/BookingCard";
import { useUserBookings } from "../../../hooks/useUserBookings";

const BookingHistoryTab = () => {

  const { bookings: bookingHistory, setBookings: setBookingHistory, loading } =
  useUserBookings("/api/users/bookings");


  const handleRating = (id, newRating) => {
    setBookingHistory((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, rating: newRating } : booking
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">История бронирований</h2>
      {loading ? (
        <Loader />
      ) : bookingHistory.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">У вас нет истории бронирований</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookingHistory.map((booking) => (
            <BookingCard
            key={booking.id}
              booking={booking}
              status="completed"
              onRate={handleRating}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingHistoryTab;
