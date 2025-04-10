import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Phone, Edit, X, Calendar, Clock, MapPin } from "lucide-react";
import NameInputComponent from "../components/sections/forLogin/NameInputComponent";
import PhoneInputComponent from "../components/sections/forLogin/PhoneInputComponent";
import AuthFormContainer from "../components/sections/forLogin/AuthFormContainer";
import SubmitButton from "../components/sections/forLogin/SubmitButton";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile"); // profile, current, history

  // Mock user data - in a real app, this would come from an API or context
  const [userData, setUserData] = useState({
    name: "Иван Иванов",
    email: "ivan@example.com",
    phone: "+7 (999) 123-45-67",
  });

  // Mock booking data
  const [currentBookings, setCurrentBookings] = useState([
    {
      id: 1,
      coworkingName: "Work&Go",
      location: "Алматы, ул. Абая 10",
      date: "10 апреля 2025",
      duration: "2 часа",
    },
    {
      id: 2,
      coworkingName: "TechSpace",
      location: "Нур-Султан, проспект Победы 5",
      date: "12 апреля 2025",
      duration: "4 часа",
    },
  ]);

  const bookingHistory = [
    {
      id: 3,
      coworkingName: "Коворкинг Space",
      location: "ул. Примерная, 123",
      date: "2023-05-10",
      duration: "1 день",
      status: "completed",
    },
    {
      id: 4,
      coworkingName: "WorkHub",
      location: "пр. Центральный, 45",
      date: "2023-04-25",
      duration: "2 часа",
      status: "completed",
    },
    {
      id: 5,
      coworkingName: "Коворкинг Space",
      location: "ул. Примерная, 123",
      date: "2023-03-15",
      duration: "4 часа",
      status: "completed",
    },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
    },
  });

  const onSubmit = (data) => {
    setUserData(data);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const bookingCancel = (id) => {
    setCurrentBookings((prev) => prev.filter((booking) => booking.id !== id));
    // Здесь можно также отправить запрос на сервер для отмены бронирования
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "profile"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              Профиль
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "current"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("current")}
            >
              Текущие бронирования
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "history"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("history")}
            >
              История бронирований
            </button>
          </div>

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Личные данные</h2>
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <Edit size={16} className="mr-1" />
                    Редактировать
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleCancel}
                      className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                      <X size={16} className="mr-1" />
                      Отмена
                    </button>
                  </div>
                )}
              </div>

              {isEditing ? (
                <AuthFormContainer title="Редактирование профиля" errors={errors}>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

                    <SubmitButton 
                      isSubmitting={isSubmitting}
                      text="Сохранить изменения"
                      submittingText="Сохранение..."
                    />
                  </form>
                </AuthFormContainer>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Имя</p>
                      <p className="font-medium">{userData.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{userData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Телефон</p>
                      <p className="font-medium">{userData.phone}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Current Bookings Tab */}
          {activeTab === "current" && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Текущие бронирования</h2>
              
              {currentBookings.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">У вас нет активных бронирований</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {currentBookings.map((booking) => (
                    <div key={booking.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{booking.coworkingName}</h3>
                          <div className="flex items-center text-gray-500 text-sm mt-1">
                            <MapPin size={14} className="mr-1" />
                            {booking.location}
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Активно
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
                      
                      <div className="mt-4 flex justify-end">
                        <button onClick={() => bookingCancel(booking.id)} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Отменить бронирование
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Booking History Tab */}
          {activeTab === "history" && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">История бронирований</h2>
              
              {bookingHistory.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">У вас нет истории бронирований</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookingHistory.map((booking) => (
                    <div key={booking.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{booking.coworkingName}</h3>
                          <div className="flex items-center text-gray-500 text-sm mt-1">
                            <MapPin size={14} className="mr-1" />
                            {booking.location}
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                          Завершено
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
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 