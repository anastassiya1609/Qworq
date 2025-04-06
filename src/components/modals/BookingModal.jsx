import React from "react";
import { useForm } from "react-hook-form";
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";

const BookingModal = ({ coworkingName, onClose, onConfirm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onConfirm(data);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Бронирование</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <p className="text-gray-600 mb-4">
            Вы бронируете: <span className="font-medium">{coworkingName}</span>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <User size={16} className="mr-1" />
                Ваше имя
              </label>
              <input
                type="text"
                className={`w-full p-2 border rounded-md ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Введите ваше имя"
                {...register("name", { required: "Имя обязательно" })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Mail size={16} className="mr-1" />
                Email
              </label>
              <input
                type="email"
                className={`w-full p-2 border rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Введите ваш email"
                {...register("email", {
                  required: "Email обязателен",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Неверный формат email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Phone size={16} className="mr-1" />
                Телефон
              </label>
              <input
                type="tel"
                className={`w-full p-2 border rounded-md ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Введите ваш телефон"
                {...register("phone", {
                  required: "Телефон обязателен",
                  pattern: {
                    value: /^[0-9+\s()-]{10,}$/,
                    message: "Неверный формат телефона",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Calendar size={16} className="mr-1" />
                Дата
              </label>
              <input
                type="date"
                className={`w-full p-2 border rounded-md ${
                  errors.date ? "border-red-500" : "border-gray-300"
                }`}
                {...register("date", { required: "Дата обязательна" })}
              />
              {errors.date && (
                <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Clock size={16} className="mr-1" />
                Длительность
              </label>
              <select
                className={`w-full p-2 border rounded-md ${
                  errors.duration ? "border-red-500" : "border-gray-300"
                }`}
                {...register("duration", { required: "Выберите длительность" })}
              >
                <option value="">Выберите длительность</option>
                <option value="1">1 час</option>
                <option value="2">2 часа</option>
                <option value="4">4 часа</option>
                <option value="8">8 часов</option>
                <option value="24">1 день</option>
              </select>
              {errors.duration && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.duration.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <MessageSquare size={16} className="mr-1" />
                Комментарий
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="3"
                placeholder="Дополнительная информация"
                {...register("comments")}
              ></textarea>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Отмена
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              >
                Подтвердить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal; 