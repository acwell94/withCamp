import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../globalstyles/Media";

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 20px 0px;
  border-bottom: 2px solid #676767;
`;

export const CommentInfoSection = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  @media ${breakPoints.mini} {
    flex-direction: column;
  }
`;

export const InfoWriterRatingArticle = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  @media ${breakPoints.mini} {
    flex-direction: column;
  }
`;

export const InfoWriter = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #676767;
  @media ${breakPoints.mini} {
    font-size: 12px;
  }
`;

export const Rating = styled(Rate)`
  line-height: 10px;

  padding: 0px 10px 0px 30px;
  @media ${breakPoints.mini} {
    line-height: 0;
    padding: 10px 0px;
  }
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  color: red;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  @media ${breakPoints.mini} {
    display: none;
  }
`;
export const MediaDeleteBtn = styled.button`
  display: none;
  @media ${breakPoints.mini} {
    display: inline;
    border: none;
    background-color: transparent;
    color: red;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    padding: 0px 0px 0px 10px;
  }
`;

export const InfoDate = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #676767;
`;

export const Contents = styled.div`
  padding: 15px 30px;

  word-break: break-all;
`;

export const ModalPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #dd7202;
  padding: 10px 0px 30px 0px;
`;

export const ModalInput = styled.input`
  border: 2px solid #7d5a50;
  border-radius: 20px;
  padding: 0px 30px;
  width: 90%;
`;
