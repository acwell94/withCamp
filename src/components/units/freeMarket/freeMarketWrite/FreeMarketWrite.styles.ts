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
    padding: 0px 0px 60px 0px;
  }
  @media ${breakPoints.mobile} {
    padding: 0px 0px 50px 0px;
  }
  @media ${breakPoints.mini} {
    font-size: 20px;
    padding: 0px 0px 30px 0px;
  }
`;

export const ContentsSection = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  @media ${breakPoints.tablet} {
    padding: 40px;
  }
  @media ${breakPoints.mobile} {
    padding: 30px;
  }
  @media ${breakPoints.mini} {
    padding: 20px;
  }
`;

export const ContentsTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  padding: 0px 0px 10px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.mini} {
    font-size: 15px;
  }
`;

export const ContentsArticle = styled.div`
  padding: 20px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
  }
  @media ${breakPoints.mini} {
    padding: 10px 0px;
  }
`;

export const QuillSection = styled.div`
  height: 500px;
  margin: 0px 0px 100px 0px;

  @media ${breakPoints.mini} {
    height: 200px;
    margin: 0px 0px 120px 0px;
  }
`;

export const ErrorMsg = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: red;
  padding: 0px 0px 0px 10px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
  @media ${breakPoints.mini} {
    font-size: 10px;
  }
`;

export const ContentsTags = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: #878787;
  padding: 0px 20px 10px 0px;
  cursor: pointer;
`;

export const FileUploadArticle = styled.div`
  display: flex;
  flex-direction: row;
  @media ${breakPoints.mini} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonArticle = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0px 0px 0px;
`;

export const SmallInfo = styled.span`
  font-size: 15px;
  color: gray;
  @media ${breakPoints.mini} {
    font-size: 10px;
  }
`;

export const MapArticle = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`;
