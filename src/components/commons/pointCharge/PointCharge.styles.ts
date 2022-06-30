import styled from "@emotion/styled";

export const Main = styled.div`
  border: 2px solid #fcdec0;
  border-radius: 20px;
  padding: 10px;
  background-color: #fcdec0;
  font-weight: 700;
`;

export const Select = styled.select`
  background-color: #fcdec0;
  outline: none;
  border: none;
  font-weight: 700;
  cursor: pointer;
`;

export const Option = styled.option`
  font-weight: 700;
`;

export const Button = styled.button`
  background-color: #fcdec0;
  border: none;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  color: #7d5a50;
  &:hover {
    color: #dd7202;
  }
`;
