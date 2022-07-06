import styled from "@emotion/styled";
import { breakPoints } from "../globalstyles/Media";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid #e5e5e5;
  width: 100%;
  padding: 0px 0px 30px 0px;
`;

export const CommentForm = styled.form`
  width: 100%;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubmitSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  padding: 5px 20px;
  margin: 0px 0px 0px 10px;
  background: #fff;
  border: 2px solid #dadada;
  border-radius: 10px;
  color: #676767;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #dd7202;
    border: 2px solid #dd7202;
  }
`;

export const ContentsNumberError = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 0px 10px 0px;
`;
export const ContentsNumber = styled.div`
  font-size: 15px;
  font-weight: 700;
  padding: 10px 0px 0px 0px;
`;

export const ErrorMsg = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: red;
  padding: 10px 0px 0px 0px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
    padding: 10px 0px 0px 10px;
  }
  @media ${breakPoints.mini} {
    font-size: 10px;
    padding: 10px 0px 0px 10px;
  }
`;
