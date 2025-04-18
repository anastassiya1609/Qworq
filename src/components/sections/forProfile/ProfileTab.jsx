import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { User, Phone, Edit, X } from "lucide-react";
import NameInputComponent from "../forLogin/NameInputComponent";
import PhoneInputComponent from "../forLogin/PhoneInputComponent";
import AuthFormContainer from "../forLogin/AuthFormContainer";
import SubmitButton from "../forLogin/SubmitButton";

import Loader from "../../shared/Loader";
import { useProfileUpdate } from "../../../hooks/useProfileUpdate";

const ProfileTab = ({ userData, setUserData, loading }) => {
  const [isEditing, setIsEditing] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: userData,
  });

  const onSubmit = useProfileUpdate({ setUserData, setIsEditing, userData });


  useEffect(() => {
    if (!isEditing && userData) {
      reset(userData);
    }
  }, [isEditing, userData, reset]);
  
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };



  return (
    loading || !userData ? <Loader /> : 
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
  );
};

export default ProfileTab;
