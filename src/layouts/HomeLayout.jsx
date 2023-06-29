import {HomeBoxShadow, Wrapper} from './styles/Layout.style';

export default function HomeLayout({children}) {
  return (
    <Wrapper>
      <HomeBoxShadow>{children}</HomeBoxShadow>
    </Wrapper>
  );
}
