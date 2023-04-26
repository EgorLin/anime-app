import { ChangeEvent, ReactElement } from "react";
import { IInputErrors } from "../../../hooks/useInput";
import styles from "./Input.module.scss";

interface IProps {
  className?: string;
  placeholder?: string;
  inputType?: string;
  type: string;
  errors?: IInputErrors;
  isDirty?: boolean;
  onBlur?: () => void;
  value: string;
  changeValue: (value: string, type?: string) => void;
}

function Input({
  className,
  placeholder,
  type,
  inputType,
  value,
  errors,
  isDirty,
  onBlur,
  changeValue,
}: IProps): ReactElement {
  const errorsArr = [];
  for (const error in errors) {
    const message = errors[error as keyof typeof errors];
    if (message)
      errorsArr.push(
        <div key={error} className={styles.error}>
          {message}
        </div>
      );
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (inputType) {
      changeValue(e.target.value, inputType);
    }
    changeValue(e.target.value);
  }

  return (
    <div className={styles.container}>
      {isDirty && <div>{errorsArr[0]}</div>}
      <input
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        onBlur={onBlur}
        className={[
          styles.input,
          errorsArr.length > 0 && isDirty ? styles.errorColor : "",
          className,
        ].join(" ")}
        type={type}
      />
    </div>
  );
}

export default Input;
