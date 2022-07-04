import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../../../commons/globalstyles/Media";

export const Main = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 30px 0px;
  border-bottom: 2px solid #676767;
`;

export const CommentTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #676767;
  padding: 0px 0px 30px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
  @media ${breakPoints.mini} {
    font-size: 15px;
  }
`;

export const CommentInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-bottom: 2px solid #676767;
  padding: 0px 0px 10px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
    padding: 0px 0px 20px 0px;
  }
  @media ${breakPoints.mini} {
    flex-direction: column;
    padding: 0px 0px 20px 0px;
  }
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 20px 0px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    flex-direction: row;
    align-items: center;
    padding: 0px 0px 20px 0px;
  }
  @media ${breakPoints.mini} {
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 15px 0px;
  }
`;

export const CommentInfoCss = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentInfoTitle = styled.div`
  font-weight: 700;
  padding: 0px 20px 0px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
  @media ${breakPoints.mini} {
    font-size: 13px;
  }
`;

export const Rating = styled(Rate)`
  line-height: 10px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    line-height: 0;
  }
  @media ${breakPoints.mini} {
    line-height: 0;
  }
`;

export const CommentContentsTitle = styled.div`
  font-weight: 700;
  padding: 30px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
    padding: 20px 0px;
  }
  @media ${breakPoints.mini} {
    font-size: 13px;
    padding: 20px 0px;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 30px 0px 0px 0px;
`;

export const ErrorMsg = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: red;
  padding: 20px 0px 0px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    padding: 0px 0px 0px 20px;
  }
  @media ${breakPoints.mini} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 10px;
    padding: 10px 0px 0px 0px;
  }
`;

export const ContentsNumberError = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsNumber = styled.div`
  font-size: 15px;
  font-weight: 700;
  padding: 20px 0px 0px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
  @media ${breakPoints.mini} {
  }
`;

export const ContentsInvisible = styled.div`
  font-size: 15px;
  font-weight: 700;
  padding: 20px 0px 0px 0px;
  visibility: hidden;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
  @media ${breakPoints.mini} {
    font-size: 10px;
  }
`;
