import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../services/axios";
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';

const useAuthForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    setIsSubmitting(true);

    try {
      const response = await axiosInstance.post('api/auth/login', formData);
      const token = response.data.token;
      const user = response.data.user;

      console.log("Ответ сервера:", response);

      dispatch(login({ user, token }));
      navigate("/profile");

    } catch (err) {
      console.error("Ошибка авторизации:", err);
      setError("server", {
        message: err?.response?.data?.message || "Ошибка при входе. Попробуйте позже.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};

export default useAuthForm;
