import { ReactElement } from "react";
import styles from "./CheckboxButton.module.scss";

interface IProps {
  title: string;
  isSelected: boolean;
  handleClick: () => void;
}

function CheckboxButtonItem({
  title,
  isSelected,
  handleClick,
}: IProps): ReactElement {
  return (
    <div className={[styles.item, isSelected ? styles.pressed : ""].join(" ")}>
      <span onClick={handleClick}>{title}</span>
    </div>
  );
}

export default CheckboxButtonItem;
