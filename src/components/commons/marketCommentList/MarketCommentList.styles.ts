import styled from "@emotion/styled";
import { breakPoints } from "../globalstyles/Media";

interface IProps {
  isToolOpen?: boolean;
}

export const CommentMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  padding: 20px 10px 10px 10px;
`;

export const CommentBorder = styled.div`
  border-bottom: 1px solid #676767;
  padding-bottom: 20px;
`;

export const CommentInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const InfoUserTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
`;

export const EditDeleteBtn = styled.div`
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
`;

export const EditDeleteTool = styled.div`
  display: ${(props: IProps) => (props.isToolOpen ? "flex" : "none")};
  flex-direction: column;
  background-color: #fff;
  border: 1px solid black;
  padding: 10px;
  position: absolute;
  top: 0px;
  right: 25px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    right: 25px;
  }
  @media ${breakPoints.mini} {
    right: 15px;
  }
`;

export const EditBtn = styled.div`
  font-size: 13px;
  cursor: pointer;
`;
export const DeleteBtn = styled.div`
  font-size: 13px;
  padding: 5px 0px 0px 0px;
  cursor: pointer;
`;

export const ContentsSection = styled.div`
  padding: 0px 0px 0px 10px;
`;

export const Contents = styled.div`
  font-size: 15px;
  width: 70%;
`;

export const Date = styled.div`
  font-size: 10px;
  color: #676767;
`;

export const ReplyBtn = styled.button`
  background-color: transparent;
  border: 1px solid #676767;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;

export const ReplySection = styled.div`
  padding: 30px 0px 0px 0px;
`;
