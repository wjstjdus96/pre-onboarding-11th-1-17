import {BoxShadow, Title, Wrapper} from './styles/Layout.style';

export default function TodoLayout({children}) {
  return (
    <Wrapper>
      <BoxShadow>
        <Title>TODO</Title>
        {children}
      </BoxShadow>
    </Wrapper>
  );
}
