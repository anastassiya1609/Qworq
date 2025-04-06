import React from "react";
import { Link } from "react-router-dom";
import BackToHome from "../forModalsWindows/BackToHome";

const AuthFormContainer = ({
  title,
  linkText,
  linkTo,
  linkLabel,
  children,
  errors,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col mt-[92px]">
      <BackToHome />

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-600 mt-2">
              {linkLabel}{" "}
              <Link to={linkTo} className="text-blue-600 hover:text-blue-700">
                {linkText}
              </Link>
            </p>
          </div>

          {errors.server && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6">
              {errors.server.message}
            </div>
          )}

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthFormContainer; 