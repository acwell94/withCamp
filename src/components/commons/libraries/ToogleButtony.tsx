import styled from "@emotion/styled";
interface IButtonProps {
  type: "button" | "submit";
  onClick?: any;
  isActive?: boolean;
  contents?: string;
}
const Button = styled.button`
  padding: 10px 42px;
  background-color: #d2691e;
  border: 2px solid #d2691e;
  border-radius: 10px;
  color: #fff;
  opacity: ${(props: IButtonProps) => (props.isActive ? "1" : "0.4")};

  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
`;

function ToogleButton(props: IButtonProps) {
  return (
    <Button type={props.type} onClick={props.onClick} isActive={props.isActive}>
      {props.contents}
    </Button>
  );
}

export default ToogleButton;
