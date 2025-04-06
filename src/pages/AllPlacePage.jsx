import React from "react";
import { Link } from "react-router-dom";

const AllPlacePage = () => {
  // В реальном приложении здесь будет запрос к API для получения данных о коворкингах
  // Для демонстрации используем моковые данные
  const coworkingSpaces = [
    {
      id: "1",
      name: "Коворкинг Space",
      description: "Современный коворкинг в центре города с удобными рабочими местами.",
      pricePerHour: "1500 ₸",
      location: "ул. Примерная, 123",
      type: "Открытый",
      image: "https://via.placeholder.com/400x300?text=Coworking+Space+1",
      amenities: ["Wi-Fi", "Кондиционер", "Кухня"],
    },
    {
      id: "2",
      name: "Коворкинг Hub",
      description: "Креативное пространство для работы и встреч с современным дизайном.",
      pricePerHour: "1200 ₸",
      location: "пр. Центральный, 45",
      type: "Закрытый",
      image: "https://via.placeholder.com/400x300?text=Coworking+Space+2",
      amenities: ["Wi-Fi", "Переговорные комнаты", "Парковка"],
    },
    {
      id: "3",
      name: "Коворкинг Work",
      description: "Уютное пространство для продуктивной работы с тихой зоной.",
      pricePerHour: "850 ₸",
      location: "ул. Рабочая, 78",
      type: "Открытый",
      image: "https://via.placeholder.com/400x300?text=Coworking+Space+3",
      amenities: ["Wi-Fi", "Принтер", "Кофе/Чай"],
    },
    {
      id: "4",
      name: "Коворкинг Office",
      description: "Профессиональное офисное пространство для команд любого размера.",
      pricePerHour: "2000 ₸",
      location: "ул. Деловая, 56",
      type: "Закрытый",
      image: "https://via.placeholder.com/400x300?text=Coworking+Space+4",
      amenities: ["Wi-Fi", "Конференц-зал", "Администратор"],
    },
    {
      id: "5",
      name: "Коворкинг Creative",
      description: "Креативное пространство для дизайнеров и творческих профессионалов.",
      pricePerHour: "1800 ₸",
      location: "ул. Творческая, 34",
      type: "Открытый",
      image: "https://via.placeholder.com/400x300?text=Coworking+Space+5",
      amenities: ["Wi-Fi", "Печать", "Зона отдыха"],
    },
    {
      id: "6",
      name: "Коворкинг Tech",
      description: "Технологический коворкинг для IT-специалистов и стартапов.",
      pricePerHour: "2200 ₸",
      location: "ул. Технологическая, 90",
      type: "Закрытый",
      image: "https://via.placeholder.com/400x300?text=Coworking+Space+6",
      amenities: ["Wi-Fi", "Серверная", "Переговорные комнаты"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Все коворкинги</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coworkingSpaces.map((space) => (
            <div key={space.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img 
                  src={space.image} 
                  alt={space.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{space.name}</h2>
                <p className="text-gray-600 mb-4">{space.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {space.location}
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Тип: {space.type}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {space.amenities.map((amenity, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-medium">от {space.pricePerHour}/час</span>
                  <Link 
                    to={`/coworking/${space.id}`}
                    className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPlacePage; 