import React from "react";
import { Building2 } from "lucide-react";

const BookingModalHeader = ({ coworkingName }) => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="p-3 bg-blue-100 rounded-full">
        <Building2 className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">Бронирование коворкинга</h2>
        <p className="text-gray-600">
          Вы бронируете: <span className="font-medium">{coworkingName}</span>
        </p>
      </div>
    </div>
  );
};

export default BookingModalHeader; 