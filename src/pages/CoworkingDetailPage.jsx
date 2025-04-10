import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingModal from '../components/sections/forModalsWindows/BookingModal';
import { ArrowLeft } from "lucide-react";

const CoworkingDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // В реальном приложении здесь будет запрос к API для получения данных о коворкинге по id
  // Для демонстрации используем моковые данные
  const coworkingData = {
    id: id,
    name: "Коворкинг Space",
    description: "Современный коворкинг в центре города с удобными рабочими местами, переговорными комнатами и зоной отдыха. Идеально подходит для фрилансеров, стартапов и удаленных команд.",
    pricePerDay: "5000 ₸",
    pricePerMonth: "80000 ₸",
    location: "ул. Примерная, 123",
    amenities: [
      { name: "Wi-Fi", icon: "📶" },
      { name: "Кондиционер", icon: "❄️" },
      { name: "Кухня", icon: "🍳" },
      { name: "Переговорные комнаты", icon: "🚪" },
      { name: "Парковка", icon: "🅿️" },
      { name: "24/7 доступ", icon: "🔑" },
      { name: "Принтер/Сканер", icon: "🖨️" },
      { name: "Кофе/Чай", icon: "☕" },
    ],
    images: [
      "https://via.placeholder.com/800x400?text=Coworking+Space+1",
      "https://via.placeholder.com/800x400?text=Coworking+Space+2",
      "https://via.placeholder.com/800x400?text=Coworking+Space+3",
    ],
  };

  const handleBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  const handleConfirmBooking = (bookingData) => {
    console.log("Бронирование подтверждено:", bookingData);
    // Здесь будет логика отправки данных на сервер
    setIsBookingModalOpen(false);
    // Можно добавить уведомление об успешном бронировании
  };

  return (
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
          {/* Галерея изображений */}
          <div className="relative h-96">
            <img
              src={coworkingData.images[0]}
              alt={coworkingData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
              <h1 className="text-2xl font-bold">{coworkingData.name}</h1>
              <p className="text-sm">{coworkingData.location}</p>
            </div>
          </div>

          <div className="p-6">
            {/* Описание */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">О коворкинге</h2>
              <p className="text-gray-700">{coworkingData.description}</p>
            </div>

            {/* Цены */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Цены</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700">За день</h3>
                  <p className="text-2xl font-bold text-blue-600">{coworkingData.pricePerDay}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700">За месяц</h3>
                  <p className="text-2xl font-bold text-blue-600">{coworkingData.pricePerMonth}</p>
                </div>
              </div>
            </div>

            {/* Удобства */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Удобства</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {coworkingData.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
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
          coworkingName={coworkingData.name}
          onClose={handleCloseModal}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
};

export default CoworkingDetailPage; 