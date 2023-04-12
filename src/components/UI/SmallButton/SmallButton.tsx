import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import SmallButtonItem from "./SmallButtonItem";

interface IProps {
  to?: string;
  icon?: ReactElement;
  onClick?: () => void;
  text: string;
}

function SmallButton({ text, to, onClick, icon }: IProps): ReactElement {
  const navigate = useNavigate();

  function handleClick() {
    onClick && onClick();
    to && navigate(to);
  }

  return <SmallButtonItem text={text} icon={icon} handleClick={handleClick} />;
}

export default SmallButton;
