import styled from 'styled-components';

const Wrapper = styled.button`
  background-color: #439a97;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  &:disabled {
    background-color: rgb(67, 154, 151, 0.5);
    cursor: default;
  }
`;

export default function Button({text, testId, ...otherProps}) {
  return (
    <Wrapper data-testid={testId || null} {...otherProps}>
      {text}
    </Wrapper>
  );
}
