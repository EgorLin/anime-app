import { ReactElement } from "react";
import styles from "./Input.module.scss";

interface IProps {
  className?: string;
  placeholder?: string;
  type?: string;
}

function Input({ className, placeholder, type }: IProps): ReactElement {
  return (
    <input
      placeholder={placeholder}
      className={[styles.input, className].join(" ")}
      type={type}
    />
  );
}

export default Input;
