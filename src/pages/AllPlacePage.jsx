import React from "react";
import CardPlace from "../components/sections/forPlaces/CardPlace";
import { coworkingSpaces } from "../utils/const";

const AllPlacePage = () => {
  // В реальном приложении здесь будет запрос к API для получения данных о коворкингах
  // Для демонстрации используем моковые данные
  

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Все коворкинги</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coworkingSpaces.map((space) => (
            <CardPlace key={space.id} space={space} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPlacePage;
