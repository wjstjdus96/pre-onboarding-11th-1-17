import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import AuthForm from '../components/authForm/AuthForm';
import AuthLayout from '../layouts/AuthLayout';
import {requestSignUp} from '../apis/auth';
import {useAuthForm} from '../hooks/useAuthForm';
import {checkValidation} from '../utils/checkValidation';
import {SIGN_UP} from '../constants/const';

export default function SignUp() {
  const navigate = useNavigate();
  const [formMsg, setFormMsg] = useState('');

  const {
    authFormValue: {email, password},
    handleChange,
  } = useAuthForm();

  const handleSubmit = async event => {
    event.preventDefault();

    await requestSignUp(email, password)
      .then(res => {
        if (res?.status === 201) {
          navigate('/signin');
        }
      })
      .catch(err => {
        // alert(err);
        setFormMsg(err.response.data.message);
      });
  };

  return (
    <AuthLayout>
      <AuthForm
        title={SIGN_UP}
        buttonTestId={'signup-button'}
        buttonName={SIGN_UP}
        onSubmit={handleSubmit}
        onInputChange={handleChange}
        isDisabledButton={checkValidation(email, password)}
        formMsg={formMsg}
      />
    </AuthLayout>
  );
}
