import { ReactElement } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import styles from "./SmallButton.module.scss";

interface IProps {
  icon?: ReactElement;
  handleClick: () => void;
  text: string;
}

function SmallButtonItem({ text, icon, handleClick }: IProps): ReactElement {
  return (
    <span className={styles.text} onClick={handleClick}>
      {text}
      {icon && <ButtonIcon className={styles.button}>{icon}</ButtonIcon>}
    </span>
  );
}

export default SmallButtonItem;
