import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const ShortInput = styled.input`
  border: 2px solid #dadada;
  border-radius: 10px;
  outline-color: #676767;
  font-size: 14px;
  font-weight: 700;
  color: #676767;
  width: 200px;
  height: 40px;
  padding: 12px 16px;
  ::placeholder {
    color: #dbdbdb;
  }
`;

interface IProps {
  type: "text" | "password";
  register?: UseFormRegisterReturn;
  placeholder?: string | undefined;
  maxLength?: number;
}

function CommonCommentShortInput(props: IProps) {
  return (
    <ShortInput
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
    />
  );
}

export default CommonCommentShortInput;
