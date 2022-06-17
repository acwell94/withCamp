import styled from "@emotion/styled";
import { ReactNode } from "react";
import FooterContainer from "./footer/Footer.container";
import HeaderContainer from "./header/Header.container";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f3f3f3;
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
