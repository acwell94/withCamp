import styled from "@emotion/styled";
import { IPaginationPresenter } from "./Pagination.types";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #e5e5e5;
  border-top: 2px solid #e5e5e5;
  padding: 30px 0px;
`;

export const PageNationSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

export const PageNextArticle = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

export const PageNumberArticle = styled.div`
  font-size: 18px;
  color: ${(props: IPaginationPresenter) =>
    props.isActive === true ? "#dd7202" : "#000000"};
  cursor: pointer;
`;
