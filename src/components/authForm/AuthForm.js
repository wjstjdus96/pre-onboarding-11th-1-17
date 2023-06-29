import { styled } from "styled-components";

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

export const Button = styled.button`
  width: 280px;
  height: 40px;
  border: none;
  background-color: #439a97;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 20px;
  font-weight: bold;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    cursor: auto;
    opacity: 1;
  }
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
      </InputBox>

      <Button data-testid={buttonTestId} disabled={isDisabledButton}>
        {buttonName}
      </Button>
    </Form>
  );
}
