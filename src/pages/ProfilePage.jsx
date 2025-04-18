import React, { useState } from "react";
import useFetchUserData from "../hooks/useFetchUserData";
import ProfileTab from "../components/sections/forProfile/ProfileTab";
import CurrentBookingsTab from "../components/sections/forProfile/CurrentBookingsTab";
import BookingHistoryTab from "../components/sections/forProfile/BookingHistoryTab";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile"); 
  const { userData, setUserData, loading } = useFetchUserData();
  

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

     
          {activeTab === "profile" && (
            <ProfileTab userData={userData} setUserData={setUserData} loading={loading} />
          )}

          {activeTab === "current" && <CurrentBookingsTab />}

          {activeTab === "history" && <BookingHistoryTab />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 