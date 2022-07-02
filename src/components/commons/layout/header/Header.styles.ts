import styled from "@emotion/styled";
import { breakPoints } from "../../globalstyles/Media";

interface IProps {
  isOpen?: boolean;
}

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 20px 30px;
  font-weight: 700;
  background-color: transparent;
  z-index: 100;
`;

export const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;

export const LogoSection = styled.div`
  width: 15%;
  @media ${breakPoints.mini} {
    width: 10%;
  }
`;

export const Logo = styled.img`
  width: 150px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 130px;
  }
  @media ${breakPoints.mobile} {
    width: 110px;
  }
  @media ${breakPoints.mini} {
    width: 80px;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  z-index: 100;
  @media ${breakPoints.mini} {
    display: ${(props: IProps) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 100px;
    width: 100%;
    background-color: #fff;
  }
`;

export const NavMenu = styled.div`
  cursor: pointer;
  @media ${breakPoints.tablet} {
    font-size: 18px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
  }
`;

export const HeaderUserSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  @media ${breakPoints.mini} {
    justify-content: flex-end;
    width: 40%;
  }
`;

export const DivideBar = styled.div`
  @media ${breakPoints.mini} {
    font-size: 8px;
    padding: 0px 5px;
  }
`;

export const UserArticle = styled.div`
  cursor: pointer;
  @media ${breakPoints.tablet} {
    font-size: 18px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
  @media ${breakPoints.mini} {
    font-size: 8px;
  }
`;

export const MediaHamburgerDiv = styled.div`
  display: none;

  @media ${breakPoints.mini} {
    display: block;
  }
`;

export const MediaHamburger = styled.img`
  width: 30px;
`;
