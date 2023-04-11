import { ReactElement, useState } from "react";
import LogInItem from "./LogInItem";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../router";

function LogIn(): ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(): void {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {
        console.log(error);
      });
    navigate(RouteNames.HOME);
  }

  function changeEmail(newValue: string): void {
    setEmail(newValue);
  }

  function changePassword(newValue: string): void {
    setPassword(newValue);
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
