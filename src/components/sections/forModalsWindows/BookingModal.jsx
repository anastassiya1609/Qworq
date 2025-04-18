import React from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import BookingModalHeader from "./booking/BookingModalHeader";
import BookingModalInfo from "./booking/BookingModalInfo";
import BookingForm from "./booking/BookingForm";
import { useParams } from "react-router-dom";

const BookingModal = ({ coworkingName, onClose, onConfirm }) => {
  const { id: coworkingId } = useParams();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const fullData = {
      ...data,
      coworkingId, // добавляем ID в данные формы
    };
    onConfirm(fullData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <BookingModalHeader coworkingName={coworkingName} />
        <BookingModalInfo />
        <BookingForm
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default BookingModal;
