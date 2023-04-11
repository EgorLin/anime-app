import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Logo from "../../components/UI/Logo/Logo";
import { RouteNames } from "../../router";
import styles from "./LogIn.module.scss";

interface IProps {
  email: string;
  changeEmail: (newValue: string) => void;
  password: string;
  changePassword: (newValue: string) => void;
  handleLogin: () => void;
}

function LogInItem({
  email,
  changeEmail,
  password,
  changePassword,
  handleLogin,
}: IProps): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <Logo className={styles.logo} />
        <Input
          className={styles.input}
          placeholder="Email"
          type="email"
          value={email}
          changeValue={changeEmail}
        />
        <Input
          className={styles.input}
          placeholder="Password"
          type="password"
          value={password}
          changeValue={changePassword}
        />
        <div onClick={handleLogin} className={styles.button}>
          Log In
        </div>
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
