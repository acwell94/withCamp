import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  padding: 20px 30px;
  font-weight: 700;
`;

export const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;

export const LogoSection = styled.div`
  width: 15%;
`;

export const Logo = styled.img`
  width: 150px;
  cursor: pointer;
`;

export const HeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const NavMenu = styled.div`
  cursor: pointer;
`;

export const HeaderUserSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`;

export const UserArticle = styled.div`
  cursor: pointer;
  font-size: 14px;
`;
