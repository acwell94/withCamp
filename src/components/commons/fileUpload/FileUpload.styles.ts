import styled from "@emotion/styled";
import { breakPoints } from "../globalstyles/Media";

export const Main = styled.div`
  width: 90%;
`;

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #676767;
  border: none;
  border-radius: 20px;
  outline: none;

  width: 90%;
  height: 150px;
  /* margin: 0px 50px 0px 0px; */
  cursor: pointer;
  &:hover {
    color: #dd7202;
  }
  @media ${breakPoints.mini} {
    margin: 0px 0px 20px 0px;
  }
`;

export const NotUpload = styled.div`
  font-size: 80px;
`;

export const FileUpload = styled.img`
  border: none;
  border-radius: 20px;
  width: 90%;
  height: 150px;
  /* margin: 0px 50px 0px 0px; */
  cursor: pointer;
`;

export const FileUploadBtn = styled.input`
  display: none;
`;
