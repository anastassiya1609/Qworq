import React from "react";
import { Calendar, Clock, Mail, MessageSquare } from "lucide-react";
import NameInputComponent from "../../forLogin/NameInputComponent";
import PhoneInputComponent from "../../forLogin/PhoneInputComponent";

const BookingForm = ({ control, errors, handleSubmit, onSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <NameInputComponent control={control} errors={errors} />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
          <Mail size={16} className="mr-1" />
          Email
        </label>
        <input
          type="email"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
            errors.email ? "border-red-500" : ""
          }`}
          placeholder="Введите ваш email"
          {...control.register("email", {
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

      <PhoneInputComponent control={control} errors={errors} />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
          <Calendar size={16} className="mr-1" />
          Дата
        </label>
        <input
          type="date"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
            errors.date ? "border-red-500" : ""
          }`}
          {...control.register("date", { required: "Дата обязательна" })}
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
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
            errors.duration ? "border-red-500" : ""
          }`}
          {...control.register("duration", { required: "Выберите длительность" })}
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
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          rows="2"
          placeholder="Дополнительная информация"
          {...control.register("comments")}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg transition-colors font-medium hover:bg-blue-700 mt-2"
      >
        Подтвердить бронирование
      </button>

      <p className="text-sm text-gray-500 text-center">
        Нажимая кнопку, вы соглашаетесь с условиями бронирования
      </p>
    </form>
  );
};

export default BookingForm; 