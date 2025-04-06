import React from "react";
import PhoneInputComponent from "./PhoneInputComponent";
import PasswordInputComponent from "./PasswordInputComponent";
import NameInputComponent from "./NameInputComponent";

const AuthFormFields = ({ control, errors, showNameField = false }) => {
  return (
    <>
      {showNameField && <NameInputComponent control={control} errors={errors} />}
      <PhoneInputComponent control={control} errors={errors} />
      <PasswordInputComponent control={control} errors={errors} />
    </>
  );
};

export default AuthFormFields; 