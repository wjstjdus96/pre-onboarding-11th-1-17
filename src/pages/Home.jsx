import {Link} from 'react-router-dom';
import styled from 'styled-components';
import HomeLayout from '../layouts/HomeLayout';
import Button from '../components/common/Button';
import {SIGN_IN, SIGN_UP, TODO, HOME} from '../constants/const';

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  button {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export default function Home() {
  return (
    <HomeLayout>
      <h2>{HOME}</h2>
      <Buttons>
        <Link to="/signin">
          <Button text={SIGN_IN} disabled={false} />
        </Link>
        <Link to="/signup">
          <Button text={SIGN_UP} disabled={false} />
        </Link>
        <Link to="/todo">
          <Button text={TODO} disabled={false} />
        </Link>
      </Buttons>
    </HomeLayout>
  );
}
