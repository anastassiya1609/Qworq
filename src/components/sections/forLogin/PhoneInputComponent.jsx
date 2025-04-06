import React from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "../forModalsWindows/PhoneInput";

const PhoneInputComponent = ({ control, errors }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Номер телефона
    </label>
    <Controller
      name="phone"
      control={control}
      defaultValue=""
      rules={{
        required: "Номер телефона обязателен",
        validate: (value) =>
          value.length === 11 || "Номер должен содержать 11 цифр",
      }}
      render={({ field }) => (
        <PhoneInput
          value={field.value}
          onChange={(value) => field.onChange(value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      )}
    />
    {errors.phone && (
      <p className="text-red-500 text-xs">{errors.phone.message}</p>
    )}
  </div>
);

export default PhoneInputComponent;
