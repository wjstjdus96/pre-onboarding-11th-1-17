import AuthForm from "../components/authForm/AuthForm";
import AuthLayout from "../layouts/AuthLayout";

export default function SignIn() {
  return (
    <AuthLayout>
      <AuthForm
        title={"로그인"}
        buttonTestId={"signin-button"}
        buttonName={"로그인"}
        onSubmit={handleSubmit}
        onInputChange={handleChange}
        isDisabledButton={validateEmailAndPassword(email, password)}
      />
    </AuthLayout>
  );
}
