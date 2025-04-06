import React from "react";
import { useForm} from "react-hook-form";
import PhoneInputComponent from "../forLogin/PhoneInputComponent"; // Убедитесь, что компонент работает правильно
import NameInputComponent from "../forLogin/NameInputComponent";

export default function LandlordForm({ handleSubmit, isSubmitting }) {
  const {
    control,
    handleSubmit: useFormSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleSubmit(data);
  };

  return (
    <form onSubmit={useFormSubmit(onSubmit)} className="space-y-4">
      <NameInputComponent control={control} errors={errors}/>

      <PhoneInputComponent control={control} errors={errors} />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg transition-colors font-medium"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </button>

      <p className="text-sm text-gray-500 text-center">
        Нажимая кнопку, вы соглашаетесь с условиями обработки персональных
        данных
      </p>
    </form>
  );
}
