import React from "react";
import { X } from "lucide-react";
import LandlordForm from "./LandlordForm";
import { SuccessMessage } from "./SuccessMessageLandlordForm";
import { useLandlordFormSubmit } from "../../../hooks/useLandlordFFormSubmit";
import { LandlordModalInfo } from "./LandlordModalInfo";

export default function ModalForLandlord({ isOpen, onClose }) {
  const {
    handleSubmit,
    isSubmitting,
    isSubmitted,
    error,
  } = useLandlordFormSubmit(onClose); // ❌ убираем formData

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl p-6 max-w-xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <SuccessMessage />
        ) : (
          <>
            <LandlordModalInfo />
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                {error}
              </div>
            )}
            <LandlordForm
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </>
        )}
      </div>
    </div>
  );
}
