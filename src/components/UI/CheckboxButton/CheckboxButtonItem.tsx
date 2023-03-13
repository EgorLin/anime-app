import { ReactElement, useState } from "react";
import styles from "./CheckboxButton.module.scss";

function CheckboxButtonItem(): ReactElement {
  const [pressed, setPressed] = useState(false);

  function handleClick(): void {
    setPressed((prev) => !prev);
  }

  return (
    <div className={[styles.item, pressed ? styles.pressed : null].join(" ")}>
      <span onClick={handleClick}>genre</span>
    </div>
  );
}

export default CheckboxButtonItem;
