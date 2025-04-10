import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { axiosInstance } from "./../../../services/axios";

const useAuthForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Тестовый запрос — заменить на реальный endpoint
      // await axiosInstance.post("/auth/login", data);
      console.log("Отправленные данные:", data);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/"); //Перевести на мой профиль
    } catch (err) {
      setError("server", {
        message:
          err?.response?.data?.message || "Ошибка при входе. Попробуйте позже.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isSubmitting,
  };
};

export default useAuthForm;
