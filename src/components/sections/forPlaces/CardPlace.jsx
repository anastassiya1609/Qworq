import React from "react";
import { Link } from "react-router-dom";
import { MapPin} from "lucide-react";

const CardPlace = ({ space }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
          <MapPin className="h-4 w-4 mr-1" />
          {space.location}
        </div>

         

        <div className="flex flex-wrap gap-2 mb-4">
          {space.amenities.map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
        
          <div className="text-blue-600 font-medium">
            от {space.pricePerDay}тг/день
          </div>
       
          <Link
            to={`/coworking/${space.id}`}
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPlace;
