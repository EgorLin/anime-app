import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Logo from "../../components/UI/Logo/Logo";
import { RouteNames } from "../../router";
import styles from "./SignUp.module.scss";

interface IProps {
  nickname: string;
  email: string;
  password: string;
  passwordRep: string;
  changeNickname: (newValue: string) => void;
  changeEmail: (newValue: string) => void;
  changePassword: (newValue: string) => void;
  changePasswordRep: (newValue: string) => void;
  handleSignup: () => void;
}

function SignUpItem({
  nickname,
  email,
  password,
  passwordRep,
  changeNickname,
  changeEmail,
  changePassword,
  changePasswordRep,
  handleSignup,
}: IProps): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <Logo className={styles.logo} />
        <Input
          className={styles.input}
          placeholder="Nickname"
          type="text"
          value={nickname}
          changeValue={changeNickname}
        />
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
        <Input
          className={styles.input}
          placeholder="Repeat password"
          type="password"
          value={passwordRep}
          changeValue={changePasswordRep}
        />
        <div className={styles.button} onClick={handleSignup}>
          Sign up
        </div>
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
