import styled from "@emotion/styled";
import { breakPoints } from "../globalstyles/Media";

export const Main = styled.div`
  display: flex;
  border: 2px solid #fcdec0;
  border-radius: 20px;
  padding: 10px;
  background-color: #fcdec0;
  font-weight: 700;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
  @media ${breakPoints.mini} {
    padding: 5px;
  }
`;

export const Select = styled.select`
  background-color: #fcdec0;
  outline: none;
  border: none;
  font-weight: 700;
  cursor: pointer;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
  @media ${breakPoints.mini} {
    font-size: 13px;
  }
`;

export const Option = styled.option`
  font-weight: 700;
`;

export const Button = styled.button`
  background-color: #fcdec0;
  border: none;
  outline: none;
  font-weight: 700;
  padding: 0px 0px 0px 10px;
  cursor: pointer;
  color: #7d5a50;
  &:hover {
    color: #dd7202;
  }
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
  @media ${breakPoints.mini} {
    font-size: 13px;
  }
`;
