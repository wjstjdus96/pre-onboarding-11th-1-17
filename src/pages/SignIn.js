import AuthForm from "../components/authForm/AuthForm";
import AuthLayout from "../layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import { requestSignIn } from "../apis/auth";
import 

export default function SignIn() {
  const navigate = useNavigate();


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
