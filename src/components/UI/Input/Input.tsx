import { ChangeEvent, ReactElement } from "react";
import styles from "./Input.module.scss";

interface IProps {
  className?: string;
  placeholder?: string;
  type?: string;
  value: string;
  changeValue: (newValue: string) => void;
}

function Input({
  className,
  placeholder,
  type,
  value,
  changeValue,
}: IProps): ReactElement {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    changeValue(e.target.value);
  }

  return (
    <input
      value={value}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
      className={[styles.input, className].join(" ")}
      type={type}
    />
  );
}

export default Input;
