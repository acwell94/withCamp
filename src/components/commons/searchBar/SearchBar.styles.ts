import styled from "@emotion/styled";
import { breakPoints } from "../globalstyles/Media";

export const Main = styled.div`
  border-radius: 50px;
  background-color: #dd7202;
  padding: 10px;
  width: 500px;
  @media ${breakPoints.mobile} {
    width: 300px;
    padding: 8px;
  }
  @media ${breakPoints.mini} {
    width: 200px;
    padding: 5px;
  }
`;

export const SearchInnerDiv = styled.div`
  border-radius: 50px;
  background-color: #fff;
`;

export const SearchInput = styled.input`
  display: flex;
  border: none;
  outline: none;
  background: transparent;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: 700;
  width: 100%;
  @media ${breakPoints.mobile} {
    font-size: 12px;
    padding: 5px 10px;
  }
  @media ${breakPoints.mini} {
    font-size: 10px;
    padding: 2px 10px;
  }
`;
