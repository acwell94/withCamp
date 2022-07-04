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
    padding: 30px;
  }
`;

export const ContentsTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 25px;
  }
  @media ${breakPoints.mini} {
    font-size: 20px;
  }
`;

export const WriterDate = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #676767;
  padding: 20px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 16px;
    padding: 10px 0px;
  }
  @media ${breakPoints.mini} {
    font-size: 12px;
  }
`;

export const ContentsBodyArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #676767;
  border-radius: 10px;
  padding: 50px 20px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    padding: 30px 20px;
  }
  @media ${breakPoints.mini} {
    padding: 20px 10px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 50px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.mini} {
    width: 200px;
    height: 200px;
  }
`;

export const ContentsStyle = styled.div`
  word-break: break-all;
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
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

export const ReactPlayerArticle = styled.div`
  width: 100%;
  height: 500px;
`;

export const LikeArticle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px 50px 0px;
  border-bottom: 2px solid #676767;
`;

export const LikeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  cursor: pointer;
`;

export const LikeImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const ButtonArticle = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 50px 0px 0px 0px;
`;

export const EditButtonDiv = styled.div`
  padding: 0px 20px;
`;

export const CommentWriteArticle = styled.div`
  width: 100%;
`;
