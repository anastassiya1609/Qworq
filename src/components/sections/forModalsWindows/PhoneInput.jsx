import React, { useEffect } from 'react'; 
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber.js";

export default function PhoneInput({
  value,
  onChange,
  placeholder = "+7 (___) ___-__-__",
  required = false,
  className = "",
  register,
  name
}) {

  const handleChange = (e) => {
    const input = e.target.value;
    const numbers = input.replace(/\D/g, "");
    onChange(numbers.slice(0, 11)); 
  };

  const formattedValue = formatPhoneNumber(value);

  useEffect(() => {
    if (register && name) {
      register(name, { required });
    }
  }, [register, name, required]);

  return (
    <input
      type="tel"
      value={formattedValue}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}
