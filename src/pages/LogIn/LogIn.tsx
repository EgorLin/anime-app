import { ReactElement, useState } from "react";
import LogInItem from "./LogInItem";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../router";
import useInput from "../../hooks/useInput";

function LogIn(): ReactElement {
  // const [email, setEmail] = useState("");
  const email = useInput("", { isEmpty: true, minLength: 6 });
  const password = useInput("", { isEmpty: true, minLength: 6 });
  const navigate = useNavigate();

  function handleLogin(): void {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.input.value, password.input.value)
      .then((userCredential) => { })
      .catch((error) => {
        console.log(error);
      });
    navigate(RouteNames.HOME);
  }

  function changeEmail(newValue: string): void {
    email.input.onChange(newValue);
  }

  function changePassword(newValue: string): void {
    password.input.onChange(newValue);
  }

  return (
    <LogInItem
      email={email}
      changeEmail={changeEmail}
      password={password}
      changePassword={changePassword}
      handleLogin={handleLogin}
    />
  );
}

export default LogIn;
