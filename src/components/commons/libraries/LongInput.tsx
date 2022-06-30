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
  type: "text" | "password" | "number" | "number";
  register?: UseFormRegisterReturn;
  placeholder?: string | undefined;
  defaultValue?: string | undefined;
  onKeyUp?: any;
}

function CommonLongInput(props: IProps) {
  return (
    <LongInput
      type={props.type}
      {...props.register}
      onKeyUp={props.onKeyUp}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue || ""}
    />
  );
}

export default CommonLongInput;
