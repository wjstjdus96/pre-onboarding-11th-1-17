import {useNavigate} from 'react-router-dom';
import {BoxShadow, Title, Wrapper} from './styles/Layout.style';
import Button from '../components/common/Button';
import {LOGOUT, TOKEN_KEY} from '../constants/const';

export default function TodoLayout({children}) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    navigate('/signin');
  };
  return (
    <Wrapper>
      <BoxShadow>
        <Button
          text={LOGOUT}
          onClick={logout}
          style={{marginLeft: 'auto', marginRight: '2rem'}}
        />
        <Title>TODO</Title>
        {children}
      </BoxShadow>
    </Wrapper>
  );
}
