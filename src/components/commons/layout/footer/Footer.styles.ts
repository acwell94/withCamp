import styled from "@emotion/styled";
import { breakPoints } from "../../globalstyles/Media";

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0px;

  background-color: #7d5a50;
  font-weight: 700;
`;

export const WriteCommon = styled.div`
  @media ${breakPoints.tablet} {
    font-size: 23px;
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const FooterPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: center;
`;
