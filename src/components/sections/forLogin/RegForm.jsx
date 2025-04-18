import React from "react";
import useRegForm from "../../../hooks/useRegForm";
import AuthFormContainer from "./AuthFormContainer";
import AuthFormFields from "./AuthFormFields";
import SubmitButton from "./SubmitButton";

const RegForm = () => {
  const { control, handleSubmit, errors, isSubmitting } =
    useRegForm();

  return (
    <AuthFormContainer
      title="Регистрация"
      linkText="Войти"
      linkTo="/auth"
      linkLabel="Уже есть аккаунт?"
      errors={errors}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthFormFields control={control} errors={errors} showNameField={true} />
        <SubmitButton 
          isSubmitting={isSubmitting} 
          text="Зарегистрироваться" 
          submittingText="Регистрация..." 
        />
      </form>
    </AuthFormContainer>
  );
};

export default RegForm; 