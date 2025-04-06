import React from "react";

const SubmitButton = ({ isSubmitting, text, submittingText }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full bg-blue-600 text-white py-3 rounded-lg transition-colors ${
        isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:bg-blue-700"
      }`}
    >
      {isSubmitting ? submittingText : text}
    </button>
  );
};

export default SubmitButton; 