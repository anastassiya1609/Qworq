import { Calendar, Clock, MapPin, Star } from "lucide-react";



const BookingCard = ({ booking, status, onCancel, onRate }) => {



  return (
    
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          
            <h3 className="font-semibold text-lg text-blue-600 hover:underline">
              {booking.coworkingName}
            </h3>
 
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <MapPin size={14} className="mr-1" />
            {booking.location}
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {status === "active" && "Активно"}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        <div className="flex items-center text-gray-600">
          <Calendar size={16} className="mr-1" />
          <span className="text-sm">{booking.date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock size={16} className="mr-1" />
          <span className="text-sm">{booking.duration}</span>
        </div>
      </div>

      {status === "active" && onCancel && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => onCancel(booking.id)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Отменить бронирование
          </button>
        </div>
      )}

      {status === "completed" && onRate && (
        <div className="mt-4">
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Оценка:</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => onRate(booking.id, star)}
                  className="focus:outline-none"
                >
                  <Star
                    size={20}
                    className={`${
                      star <= booking.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
