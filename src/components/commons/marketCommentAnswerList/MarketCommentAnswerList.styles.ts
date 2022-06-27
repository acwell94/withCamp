import styled from "@emotion/styled";

export const CommentMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 20px 10px;
  border-bottom: 1px solid #676767;
`;

export const CommentBorder = styled.div``;

export const CommentInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const InfoUserTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

export const EditDeleteBtn = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
`;

export const EditDeleteTool = styled.div`
  background-color: #fff;
  border: 1px solid black;
  padding: 10px;
  position: absolute;
  top: 25px;
  left: 410px;
`;

export const EditBtn = styled.div`
  font-size: 13px;
  cursor: pointer;
`;
export const DeleteBtn = styled.div`
  font-size: 13px;
  cursor: pointer;
`;

export const ContentsSection = styled.div``;

export const Contents = styled.div`
  font-size: 20px;
  width: 70%;
`;

export const Date = styled.div`
  font-size: 13px;
  color: #676767;
`;

export const ReplyBtn = styled.button`
  background-color: transparent;
  border: 1px solid #676767;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;
