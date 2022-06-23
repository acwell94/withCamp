import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const LongInput = styled.input`
  border: 2px solid #dadada;
  border-radius: 10px;
  outline-color: #676767;
  font-size: 14px;
  font-weight: 700;
  color: #676767;
  width: 100%;
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

function CommonCommentLongInput(props: IProps) {
  return (
    <LongInput
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
    />
  );
}

export default CommonCommentLongInput;
