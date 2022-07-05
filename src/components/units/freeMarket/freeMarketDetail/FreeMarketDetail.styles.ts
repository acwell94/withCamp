import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/globalstyles/Media";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  padding: 80px 50px;
  @media ${breakPoints.tablet} {
    width: 100%;
    padding: 60px 50px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 50px 30px;
  }
  @media ${breakPoints.mini} {
    width: 100%;
    padding: 20px 10px;
  }
`;

export const MainTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 80px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    padding: 0px 0px 50px 0px;
    font-size: 25px;
  }
  @media ${breakPoints.mini} {
    padding: 0px 0px 20px 0px;
    font-size: 20px;
  }
`;

export const Name = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #dd7202;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 25px;
  }
  @media ${breakPoints.mini} {
    font-size: 20px;
  }
`;

export const ContentsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  box-shadow: rgb(219 219 219) 0px 5px 20px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    padding: 40px;
  }
  @media ${breakPoints.mini} {
    padding: 10px;
  }
`;

export const CarouselArticle = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin: 30px 0px;
  padding: 0px 20px;
  @media ${breakPoints.mini} {
    height: 200px;
  }
`;

export const ContentsArticle = styled.div`
  border-top: 3px solid #e5e5e5;
  border-bottom: 3px solid #e5e5e5;
  padding: 30px 20px;
  width: 100%;
`;

export const ContentsName = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 10px 0px;
  word-break: break-all;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 25px;
  }
  @media ${breakPoints.mini} {
    font-size: 20px;
  }
`;

export const TagsArrange = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContentsTags = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #878787;
  padding: 0px 20px 0px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
  @media ${breakPoints.mini} {
    font-size: 12px;
  }
`;

export const ContentsPrice = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 10px 0px 0px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 25px;
  }
  @media ${breakPoints.mini} {
    font-size: 20px;
  }
`;

export const ContentsRemarks = styled.div`
  font-size: 25px;
  font-weight: 700;
  word-break: break-all;
  color: #a5a5a5;
  padding: 20px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.mini} {
    font-size: 15px;
  }
`;

export const ContentsStyle = styled.div`
  word-break: break-all;
`;

export const ContentsPickedCount = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #878787;
`;

export const PickedPayBtnArticle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0px 0px 0px;
  @media ${breakPoints.mini} {
  }
`;

export const EditButtonDiv = styled.div`
  padding: 0px 20px;
`;

export const MapArticle = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #e5e5e5;
  width: 100%;
  padding: 30px 20px;
`;

export const MapBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px 0px;
  width: 100%;
  height: 500px;
`;

export const NoMapMessage = styled.div`
  font-size: 30px;
  font-weight: 700;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.mini} {
    font-size: 15px;
  }
`;

export const EditDeleteBtnArticle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #e5e5e5;
  width: 100%;
  padding: 30px 20px;
`;
