import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import AuthForm from '../components/authForm/AuthForm';
import AuthLayout from '../layouts/AuthLayout';
import {requestSignIn} from '../apis/auth';
import {useAuthForm} from '../hooks/useAuthForm';
import {SIGN_IN, TOKEN_KEY} from '../constants/const';
import {checkValidation} from '../utils/checkValidation';
import {setToken} from '../utils/checkToken';

export default function SignIn() {
  const navigate = useNavigate();

  const {
    authFormValue: {email, password},
    handleChange,
  } = useAuthForm();

  const handleSubmit = async event => {
    event.preventDefault();

    await requestSignIn(email, password)
      .then(res => {
        if (res?.status === 200) {
          setToken(TOKEN_KEY, res.data.access_token);
          navigate('/todo', {replace: true});
        }
      })
      .catch(error => {
        if (axios.isAxiosError(error)) {
          const axiosError = error;
          if (axiosError.response) {
            // 요청은 성공했지만 서버에서 오류 응답을 반환한 경우
            console.log(axiosError.response.data.message);
          } else if (axiosError.request) {
            // 요청이 이루어졌지만 응답을 받지 못한 경우
            console.log('No response received:', axiosError.request);
          } else {
            // 요청을 보내기 전에 발생한 오류
            console.log('Error during sign in:', axiosError.message);
          }
        } else {
          console.error('Error during sign in:', error);
        }
      });
  };

  return (
    <AuthLayout>
      <AuthForm
        title={SIGN_IN}
        buttonTestId={'signin-button'}
        buttonName={SIGN_IN}
        onSubmit={handleSubmit}
        onInputChange={handleChange}
        isDisabledButton={checkValidation(email, password)}
      />
    </AuthLayout>
  );
}
