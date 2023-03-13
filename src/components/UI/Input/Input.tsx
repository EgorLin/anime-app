import { ReactElement } from "react";
import styles from "./Input.module.scss";

interface IProps {
  className?: string;
  placeholder?: string;
}

function Input({ className, placeholder }: IProps): ReactElement {
  return (
    <input
      placeholder={placeholder}
      className={[styles.input, className].join(" ")}
    />
  );
}

export default Input;
