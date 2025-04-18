import React, { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import BookingModal from "../components/sections/forModalsWindows/BookingModal";
import { ArrowLeft } from "lucide-react";
import axiosInstance from "../services/axios";
import Loader from "../components/shared/Loader";
import toast from 'react-hot-toast';
import { useCoworkingDetail } from "../hooks/useCoworkingDetail";

const CoworkingDetailPage = () => {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { id } = useParams();
  const { singleCoworkingData, loading } = useCoworkingDetail(id);

  const handleBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  const handleConfirmBooking = async (bookingData) => {
    try {
      const response = await axiosInstance.post(`/api/bookings`, bookingData);
      console.log("Бронирование успешно подтверждено:", response.data);
      setIsBookingModalOpen(false);
      toast.success(`Вы успешно забронировали: ${singleCoworkingData.name}`);
    } catch (error) {
      console.error("Ошибка при подтверждении бронирования:", error);
      alert("Ошибка при бронировании. Попробуйте снова.");
    }
  };

  return loading || !singleCoworkingData ? (
    <Loader />
  ) : (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate("/all-places")}
          className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Назад к списку коворкингов
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">

          <div className="relative h-96">
            <img
              src={singleCoworkingData.images}
              alt={singleCoworkingData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
              <h1 className="text-2xl font-bold">{singleCoworkingData.name}</h1>
              <p className="text-sm">{singleCoworkingData.address}</p>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">О коворкинге</h2>
              <p className="text-gray-700">{singleCoworkingData.description}</p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Цены</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700">За час</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {singleCoworkingData.pricePerHour}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700">За день</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {singleCoworkingData.pricePerDay}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700">За месяц</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {singleCoworkingData.pricePerMonth}
                  </p>
                </div>
              
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Удобства</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {singleCoworkingData.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-50 p-3 rounded-lg"
                  >
                    <span className="text-2xl mr-2">{amenity.icon}</span>
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Кнопка бронирования */}
            <div className="mt-8">
              <button
                onClick={handleBooking}
                className="w-full bg-black text-white py-3 px-6 rounded-lg transition-colors hover:bg-gray-800 font-medium text-lg"
              >
                Забронировать
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно бронирования */}
      {isBookingModalOpen && (
        <BookingModal
          coworkingName={singleCoworkingData.name}
          onClose={handleCloseModal}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
};

export default CoworkingDetailPage;
