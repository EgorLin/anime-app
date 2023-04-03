import { ReactElement } from "react";
import Input from "../Input/Input";
import styles from "./RangeBox.module.scss";

function RangeBoxItem(): ReactElement {
  return (
    <div className={styles.container}>
      {/* <Input className={styles.input} placeholder="Year from" /> */}
      {/* <Input className={styles.input} placeholder="Year to" /> */}
    </div>
  );
}

export default RangeBoxItem;
