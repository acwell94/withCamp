import styled from "@emotion/styled";
import { ReactNode } from "react";
import FooterContainer from "./footer/Footer.container";
import HeaderContainer from "./header/Header.container";
import TopButton from "./topBtn/TopBtn";

const Background = styled.div`
  background-image: url("/images/main.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BodyTopBtn = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

interface ILayoutProps {
  children: ReactNode;
}

function Layout(props: ILayoutProps) {
  return (
    <Background>
      <HeaderContainer />
      <BodyTopBtn>
        <Body>{props.children}</Body>
        <TopButton />
      </BodyTopBtn>
      <FooterContainer />
    </Background>
  );
}

export default Layout;
