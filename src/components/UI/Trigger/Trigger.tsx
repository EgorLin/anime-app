import { ReactElement, RefObject, useRef } from "react";
import styles from "./Trigger.module.scss";

interface IProps {
  target: RefObject<HTMLDivElement>;
}

function Trigger({ target }: IProps): ReactElement {
  return <div ref={target} className={styles.trigger}></div>;
}

export default Trigger;
