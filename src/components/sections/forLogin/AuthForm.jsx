import React from "react";
import useAuthForm from "../../../hooks/useAuthForm";
import AuthFormContainer from "./AuthFormContainer";
import AuthFormFields from "./AuthFormFields";
import SubmitButton from "./SubmitButton";

const AuthForm = () => {
  const { control, handleSubmit, errors, isSubmitting } = useAuthForm();

  return (
    <AuthFormContainer
      title="Вход в аккаунт"
      linkText="Зарегистрироваться"
      linkTo="/register"
      linkLabel="Нет аккаунта?"
      errors={errors}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthFormFields control={control} errors={errors} showNameField={false} />
        <SubmitButton 
          isSubmitting={isSubmitting} 
          text="Войти" 
          submittingText="Вход..." 
        />
      </form>
    </AuthFormContainer>
  );
};

export default AuthForm;
