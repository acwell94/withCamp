import styled from "@emotion/styled";
import { breakPoints } from "../../commons/globalstyles/Media";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  padding: 80px 50px;
  @media ${breakPoints.tablet} {
    width: 100%;
    padding: 50px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 30px;
  }
  @media ${breakPoints.mini} {
    width: 100%;
    padding: 10px;
  }
`;

export const WriteSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;
  @media ${breakPoints.tablet} {
    padding: 50px 0px;
  }
  @media ${breakPoints.mobile} {
    padding: 30px 0px;
  }
  @media ${breakPoints.mini} {
    padding: 10px 0px;
  }
`;

export const WriteCommon = styled.div`
  font-size: 30px;
  font-weight: 700;
  @media ${breakPoints.tablet} {
    font-size: 25px;
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.mini} {
    font-size: 10px;
  }
`;

export const LogoArticle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const MainLogo = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #dd7202;
  @media ${breakPoints.tablet} {
    font-size: 35px;
  }
  @media ${breakPoints.mobile} {
    font-size: 25px;
  }
  @media ${breakPoints.mini} {
    font-size: 15px;
  }
`;

export const ImgSectionFirst = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  align-items: center;
  width: 100%;
  padding: 100px 0px;
  @media ${breakPoints.tablet} {
    flex-direction: column;
    padding: 80px 0px;
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
    padding: 60px 0px;
  }
  @media ${breakPoints.mini} {
    flex-direction: column;
    padding: 40px 0px;
  }
`;

export const ImgSectionSecond = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  width: 100%;
  @media ${breakPoints.tablet} {
    flex-direction: column;
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
  @media ${breakPoints.mini} {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 400px;
  border-radius: 20px;
  @media ${breakPoints.tablet} {
    margin: 0px 0px 50px 0px;
  }
  @media ${breakPoints.mobile} {
    margin: 0px 0px 30px 0px;
  }
  @media ${breakPoints.mini} {
    width: 200px;
    margin: 0px 0px 20px 0px;
  }
`;

export const OutTroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0px 0px 0px;
`;

export const OutTroWrite = styled.div`
  font-size: 50px;
  font-weight: 700;
  @media ${breakPoints.tablet} {
    font-size: 40px;
  }
  @media ${breakPoints.mobile} {
    font-size: 30px;
  }
  @media ${breakPoints.mini} {
    font-size: 20px;
  }
`;

export const OutTroLogo = styled.div`
  font-size: 80px;
  font-weight: 700;
  color: #dd7202;
  @media ${breakPoints.tablet} {
    font-size: 50px;
  }
  @media ${breakPoints.mobile} {
    font-size: 40px;
  }
  @media ${breakPoints.mini} {
    font-size: 30px;
  }
`;
