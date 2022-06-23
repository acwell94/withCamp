import styled from "@emotion/styled";
import { ReactNode } from "react";
import FooterContainer from "./footer/Footer.container";
import HeaderContainer from "./header/Header.container";

const Test = styled.div`
  background-image: url("/images/main.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

interface ILayoutProps {
  children: ReactNode;
}

function Layout(props: ILayoutProps) {
  return (
    <Test>
      <HeaderContainer />
      <Body>{props.children}</Body>
      <FooterContainer />
    </Test>
  );
}

export default Layout;
