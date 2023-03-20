import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Logo from "../../components/UI/Logo/Logo";
import { RouteNames } from "../../router";
import styles from "./SignUp.module.scss";

function SignUpItem(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <Logo className={styles.logo} />
        <Input className={styles.input} placeholder="Name" type="text" />
        <Input className={styles.input} placeholder="Email" type="email" />
        <Input
          className={styles.input}
          placeholder="Password"
          type="password"
        />
        <Input
          className={styles.input}
          placeholder="Repeat password"
          type="password"
        />
        <Link to={RouteNames.HOME} className={styles.button}>
          Sign up
        </Link>
        <p>
          Already have an account?{" "}
          <Link to={RouteNames.LOGIN} className={styles.signUp}>
            Log in!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpItem;
