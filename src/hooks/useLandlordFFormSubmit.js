import { useState } from "react";

export function useLandlordFormSubmit(onClose) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      setError("");

      console.log("Sending data:", data);

      setTimeout(() => {
        setIsSubmitted(true);
        console.log("Form submitted successfully!");
      }, 1000);
    } catch (err) {
      setError("Произошла ошибка при отправке формы.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleSubmit,
    isSubmitting,
    isSubmitted,
    error,
  };
}
