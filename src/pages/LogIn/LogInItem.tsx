import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Logo from "../../components/UI/Logo/Logo";
import { IForm } from "../../hooks/useInput";
import { RouteNames } from "../../router";
import styles from "./LogIn.module.scss";

interface IProps {
  inputData: IForm;
  onChange: (...args: any[]) => void;
  hasError: boolean;
}

function LogInItem({ inputData, onChange, hasError }: IProps): ReactElement {
  const inputs = inputData.fields.map((input) => (
    <Input
      key={input.inputType}
      className={styles.input}
      placeholder={input.placeholder}
      type={input.type}
      inputType={input.inputType}
      value={input.value}
      errors={input.errors}
      isDirty={input.isDirty}
      onBlur={input.onBlur}
      changeValue={onChange}
    />
  ));
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <Logo className={styles.logo} />
        {inputs}
        <button
          className={[
            styles.button,
            hasError ? styles.disabledButton : styles.selected,
          ].join(" ")}
          onClick={(e) => inputData.onSubmit(e)}
          disabled={hasError}
        >
          Log In
        </button>
        <p>
          Don't have an account?{" "}
          <Link to={RouteNames.SINGUP} className={styles.signUp}>
            Sign up!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogInItem;
