import styled from "@emotion/styled";
import { Rate } from "antd";

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
`;

export const CommentInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 10px 0px;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 20px 0px 0px;
`;

export const CommentInfoCss = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentInfoTitle = styled.div`
  font-weight: 700;
  padding: 0px 20px 0px 0px;
`;

export const Rating = styled(Rate)`
  line-height: 10px;

  padding: 0px 0px 0px 30px;
`;

export const CommentContentsTitle = styled.div`
  font-weight: 700;
  padding: 0px 0px 30px 0px;
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
`;

export const ContentsInvisible = styled.div`
  font-size: 15px;
  font-weight: 700;
  padding: 20px 0px 0px 0px;
  visibility: hidden;
`;
