import AuthForm from "../components/authForm/AuthForm";
import AuthLayout from "../layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import { requestSignIn } from "../apis/auth";
import { useAuthForm } from "../hooks/useAuthForm";
import { TOKEN_KEY } from "../constants/const";
import { checkValidation } from "../utils/checkValidation";
import { setToken } from "../utils/checkToken";

export default function SignIn() {
  const navigate = useNavigate();

  const {
    authFormValue: { email, password },
    handleChange,
  } = useAuthForm();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await requestSignIn(email, password)
      .then((res) => {
        if (res?.status === 200) {
          setToken(TOKEN_KEY, res.data.access_token);
          navigate("/todo", { replace: true });
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <AuthLayout>
      <AuthForm
        title={"로그인"}
        buttonTestId={"signin-button"}
        buttonName={"로그인"}
        onSubmit={handleSubmit}
        onInputChange={handleChange}
        isDisabledButton={checkValidation(email, password)}
      />
    </AuthLayout>
  );
}
