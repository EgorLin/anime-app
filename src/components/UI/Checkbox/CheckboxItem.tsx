import { ReactElement } from "react";
import CheckboxButton from "../CheckboxButton/CheckboxButton";
import styles from "./Checkbox.module.scss";

interface IProps {
  title: string;
  showPopUp: boolean;
  changeVisibility: (value?: boolean) => void;
  data: string[][];
  activeList: string[];
  onChange: (newValue: string) => void;
}

function CheckboxItem({
  title,
  showPopUp,
  changeVisibility,
  data,
  activeList,
  onChange,
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
          {data.map((element) => (
            <CheckboxButton
              isSelected={activeList.some((active) => active === element[1])}
              value={element[1]}
              title={element[0]}
              onChange={onChange}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CheckboxItem;
