import { ChangeEvent, ReactElement } from "react";
import { IInputErrors } from "../../../hooks/useInput";
import styles from "./Input.module.scss";

interface IProps {
  className?: string;
  placeholder?: string;
  type: string;
  errors?: IInputErrors;
  isDirty?: boolean;
  value: string;
  changeValue: (value: string) => void;
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
  const errorsArr = [];
  console.log(errors);
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
    changeValue(e.target.value);
  }

  return (
    <div className={styles.container}>
      {isDirty && <div>{errorsArr[0]}</div>}
      <input
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        className={[
          styles.input,
          errorsArr.length > 0 ? styles.errorColor : "",
          className,
        ].join(" ")}
        type={type}
      />
    </div>
  );
}

export default Input;
