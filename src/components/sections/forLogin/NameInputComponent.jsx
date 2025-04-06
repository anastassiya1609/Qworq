import React from "react";
import { Controller } from "react-hook-form";

const NameInputComponent = ({ control, errors }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Ваше имя
    </label>
    <Controller
      name="name"
      control={control}
      defaultValue=""
      rules={{
        required: "Имя обязательно",
        minLength: {
          value: 2,
          message: "Имя должно быть не короче 2 символов",
        },
        pattern: {
          value: /^[А-Яа-яЁёA-Za-z\s-]+$/,
          message: "Имя может содержать только буквы",
        },
      }}
      render={({ field }) => (
        <input
          type="text"
          {...field}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Введите ваше имя"
        />
      )}
    />
    {errors.name && (
      <p className="text-red-500 text-xs">{errors.name.message}</p>
    )}
  </div>
);

export default NameInputComponent;
