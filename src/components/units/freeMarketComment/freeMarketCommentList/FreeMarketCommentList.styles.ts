import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/globalstyles/Media";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid #e5e5e5;
  width: 100%;
  padding: 30px 20px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
  @media ${breakPoints.mini} {
    width: 100%;
    padding: 30px 10px;
  }
`;
