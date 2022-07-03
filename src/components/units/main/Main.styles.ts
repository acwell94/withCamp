import styled from "@emotion/styled";
import { breakPoints } from "../../commons/globalstyles/Media";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;

  padding: 0px 50px 80px 50px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
  @media ${breakPoints.mini} {
    width: 100%;
  }
`;

export const IntroSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.mobile} {
    padding: 30px 0px;
  }
  @media ${breakPoints.mini} {
    padding: 30px 0px;
  }
`;

export const IntroArrange = styled.div`
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media ${breakPoints.mini} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const IntroSectionFirst = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #dd7202;

  @media ${breakPoints.mini} {
    font-size: 30px;
  }
`;

export const IntroFont40 = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: black;

  @media ${breakPoints.mini} {
    font-size: 20px;
  }
`;

export const IntroFontNewMeet = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 30px 0px;

  @media ${breakPoints.mini} {
    font-size: 15px;
  }
`;

export const IntroBtnArticle = styled.div`
  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
  }
  @media ${breakPoints.mini} {
    display: flex;
    justify-content: center;
  }
`;

export const IntroMoveBtn = styled.button`
  border: 2px solid #7d5a50;
  border-radius: 10px;
  outline: none;
  background-color: #7d5a50;
  font-size: 30px;
  font-weight: 700;
  color: #fcdec0;
  width: 250px;
  cursor: pointer;
  &:hover {
    background-color: #fcdec0;
    color: #7d5a50;
    border: 2px solid #7d5a50;
  }

  @media ${breakPoints.mobile} {
    font-size: 20px;
    width: 170px;
  }
  @media ${breakPoints.mini} {
    font-size: 15px;
    width: 130px;
  }
`;

export const IntroImageArticle = styled.div`
  padding: 0px 0px 0px 50px;

  @media ${breakPoints.mobile} {
    display: none;
  }
  @media ${breakPoints.mini} {
    display: none;
  }
`;

export const IntroImage = styled.img`
  width: 400px;
`;

export const BoardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 50px 0px;
  width: 100%;
`;

export const BoardSectionTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  padding: 0px 0px 50px 0px;

  @media ${breakPoints.mini} {
    font-size: 20px;
  }
`;

export const BestContentsCss = styled.div`
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;

  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  width: 100%;

  @media ${breakPoints.tablet} {
    place-items: center;
    grid-template-columns: 50% 50%;
  }
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
  @media ${breakPoints.mini} {
    display: flex;
    flex-direction: column;
  }
`;

export const BestContentsItemSection = styled.div`
  width: 271px;
  cursor: pointer;
  border-radius: 20px 20px 10px 10px;
  background-color: #7d5a50e0;
  box-shadow: rgb(219 219 219) 0px 5px 20px;
  @media ${breakPoints.tablet} {
    width: 80%;
    margin: 0px 0px 50px 0px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin: 0px 0px 50px 0px;
  }
  @media ${breakPoints.mini} {
    width: 100%;
    margin: 0px 0px 50px 0px;
  }
`;

export const ItemImgArticle = styled.div`
  border-radius: 20px;
  height: 160px;
  padding: 0px 0px 15px 0px;
  overflow: hidden;
  @media ${breakPoints.tablet} {
    height: auto;
    padding: 0;
  }
  @media ${breakPoints.mobile} {
    height: auto;
  }
  @media ${breakPoints.mini} {
    height: auto;
    padding: 0px 0px 5px 0px;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 20px;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.2);
    padding: 0px 0px 15px 0px;
    border-radius: 20px;
  }
  @media ${breakPoints.tablet} {
    height: 300px;
  }
  @media ${breakPoints.mobile} {
    height: 350px;
  }
  @media ${breakPoints.mini} {
    height: 150px;
  }
`;

export const ItemArrange = styled.div`
  padding: 10px 10px 0px 10px;
`;

export const ItemArticle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 0px 0px 5px 0px;
`;

export const ItemTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #fcdec0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${breakPoints.tablet} {
    font-size: 25px;
  }
  @media ${breakPoints.mobile} {
    font-size: 28px;
  }
`;

export const ItemWriter = styled.div`
  font-size: 13px;
  color: #e5b299;
  @media ${breakPoints.tablet} {
    font-size: 20px;
  }
  @media ${breakPoints.mobile} {
    font-size: 26px;
  }
`;

export const ItemCreated = styled.div`
  font-size: 10px;
  color: #e5b299;
  font-weight: 700;
  padding: 0px 10px 0px 0px;
  @media ${breakPoints.tablet} {
    font-size: 18px;
  }
  @media ${breakPoints.mobile} {
    font-size: 23px;
  }
  @media ${breakPoints.mini} {
  }
`;

export const LikeCountSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeartImg = styled.img`
  width: 15px;
  @media ${breakPoints.tablet} {
    width: 18px;
  }
  @media ${breakPoints.mobile} {
    width: 23px;
  }
  @media ${breakPoints.mini} {
  }
`;

export const ItemLikeCount = styled.div`
  font-size: 12px;
  color: #e5b299;
  padding: 0px 0px 0px 5px;
  @media ${breakPoints.tablet} {
    font-size: 18px;
  }
  @media ${breakPoints.mobile} {
    font-size: 23px;
  }
  @media ${breakPoints.mini} {
  }
`;

export const BestGoodsCss = styled.div`
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  justify-content: space-between;
  width: 100%;
  @media ${breakPoints.tablet} {
    place-items: center;
    grid-template-columns: 50% 50%;
  }
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
  @media ${breakPoints.mini} {
    display: flex;
    flex-direction: column;
  }
`;
