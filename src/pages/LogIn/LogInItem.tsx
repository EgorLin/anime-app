import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Logo from "../../components/UI/Logo/Logo";
import { RouteNames } from "../../router";
import styles from "./LogIn.module.scss";

function LogInItem(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <Logo className={styles.logo} />
        <Input className={styles.input} placeholder="Email" type="email" />
        <Input
          className={styles.input}
          placeholder="Password"
          type="password"
        />
        <Link to={RouteNames.HOME} className={styles.button}>
          Log In
        </Link>
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
