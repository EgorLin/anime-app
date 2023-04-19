import { ChangeEvent, ReactElement } from "react";
import { IInputError } from "../../../types/IInput";
import styles from "./Input.module.scss";

interface IProps {
  className?: string;
  placeholder?: string;
  type?: string;
  errors?: IInputError;
  isDirty?: boolean;
  value: string;
  changeValue: (newValue: string) => void;
}

function Input({
  className,
  placeholder,
  type,
  value,
  errors,
  isDirty,
  changeValue,
}: IProps): ReactElement {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    changeValue(e.target.value);
  }
  const errorsArr = [];
  for (const error in errors) {
    errorsArr.push(
      <div key={error}>{errors[error as keyof typeof errors]}</div>
    );
  }

  return (
    <>
      {isDirty && <div>{errorsArr}</div>}
      <input
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        className={[styles.input, className].join(" ")}
        type={type}
      />
    </>
  );
}

export default Input;
