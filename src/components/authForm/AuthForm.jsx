import {styled} from 'styled-components';
import Button from '../common/Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 400px;
  background-color: #9ed5c5;
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Title = styled.h1`
  font-size: 26px;
  color: #fff;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 280px;
  height: 36px;
  border: none;
  background-color: #def5e5;
  padding-left: 10px;
  font-size: 18px;
`;

export const Label = styled.label`
  margin-bottom: 6px;
  font-weight: bold;
`;

export default function AuthForm({
  title,
  buttonTestId,
  buttonName,
  isDisabledButton,
  onSubmit,
  onInputChange,
}) {
  return (
    <Form onSubmit={onSubmit}>
      <Title>{title}</Title>

      <InputBox>
        <Label>이메일</Label>
        <Input
          id="email"
          type="text"
          data-testid="email-input"
          onChange={onInputChange}
        />
      </InputBox>

      <InputBox>
        <Label>비밀번호</Label>
        <Input
          id="password"
          type="password"
          data-testid="password-input"
          onChange={onInputChange}
        />
        <br />
        <Button
          testId={buttonTestId}
          text={buttonName}
          disabled={isDisabledButton}
          style={{width: '100%'}}
        />
      </InputBox>
    </Form>
  );
}
