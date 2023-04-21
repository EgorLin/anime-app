import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Logo from "../../components/UI/Logo/Logo";
import { IForm } from "../../hooks/useInput";
import { RouteNames } from "../../router";
import styles from "./LogIn.module.scss";

interface IProps {
  inputData: IForm;
}

function LogInItem({ inputData }: IProps): ReactElement {
  const inputs = inputData.fields.map((input) => (
    <Input
      key={input.type}
      className={styles.input}
      placeholder={input.type[0].toUpperCase() + input.type.slice(1)}
      type={input.type}
      value={input.value}
      errors={input.errors}
      isDirty={true}
      changeValue={input.onChange}
    />
  ));
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <Logo className={styles.logo} />
        {inputs}
        <button
          className={styles.button}
          onClick={(e) => inputData.onSubmit(e)}
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
