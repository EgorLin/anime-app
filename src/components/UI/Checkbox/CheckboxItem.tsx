import { ReactElement } from "react";
import CheckboxButton from "../CheckboxButton/CheckboxButton";
import styles from "./Checkbox.module.scss";

interface IProps {
  title: string;
  showPopUp: boolean;
  changeVisibility: (value?: boolean) => void;
}

function CheckboxItem({
  title,
  showPopUp,
  changeVisibility,
}: IProps): ReactElement {
  return (
    <div className={styles.container}>
      <span className={styles.text} onClick={() => changeVisibility()}>
        {title}
      </span>
      {showPopUp ? (
        <div
          onMouseOver={() => changeVisibility(true)}
          onMouseOut={() => changeVisibility(false)}
          className={styles.popUp}
        >
          <CheckboxButton />
          <CheckboxButton />
          <CheckboxButton />
          <CheckboxButton />
          <CheckboxButton />
          <CheckboxButton />
          <CheckboxButton />
        </div>
      ) : null}
    </div>
  );
}

export default CheckboxItem;
