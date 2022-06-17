import styled from "@emotion/styled";
import { ReactNode } from "react";
import FooterContainer from "./footer/Footer.container";
import HeaderContainer from "./header/Header.container";

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface ILayoutProps {
  children: ReactNode;
}

function Layout(props: ILayoutProps) {
  return (
    <>
      <HeaderContainer />
      <Body>{props.children}</Body>
      <FooterContainer />
    </>
  );
}

export default Layout;
