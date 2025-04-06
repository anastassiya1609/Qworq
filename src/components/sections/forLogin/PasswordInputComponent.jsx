import React from "react";
import { Controller } from "react-hook-form";

const PasswordInputComponent = ({ control, errors }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Пароль
    </label>
    <Controller
      name="password"
      control={control}
      defaultValue=""
      rules={{
        required: "Пароль обязателен",
        minLength: {
          value: 6,
          message: "Пароль должен содержать хотя бы 6 символов",
        },
        pattern: {
          value:
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
          message:
            "Пароль должен быть на латинице, содержать хотя бы одну заглавную букву, одну цифру и один специальный символ",
        },
      }}
      render={({ field }) => (
        <input
          type="password"
          {...field}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Введите пароль"
        />
      )}
    />
    {errors.password && (
      <p className="text-red-500 text-xs">{errors.password.message}</p>
    )}
  </div>
);

export default PasswordInputComponent;
