import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestoreDB } from "../../firebase";
import { RouteNames } from "../../router";
import SignUpItem from "./SignUpItem";

function SignUp(): ReactElement {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");
  const navigate = useNavigate();

  function handleSignup() {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const docRef = await setDoc(
          doc(firestoreDB, "users", userCredential.user.uid),
          {
            username: nickname,
            email: email,
          }
        );
        navigate(RouteNames.HOME);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function changeNickname(newValue: string): void {
    setNickname(newValue);
  }

  function changeEmail(newValue: string): void {
    setEmail(newValue);
  }

  function changePassword(newValue: string): void {
    setPassword(newValue);
  }

  function changePasswordRep(newValue: string): void {
    setPasswordRep(newValue);
  }

  return (
    <SignUpItem
      nickname={nickname}
      email={email}
      password={password}
      passwordRep={passwordRep}
      changeNickname={changeNickname}
      changeEmail={changeEmail}
      changePassword={changePassword}
      changePasswordRep={changePasswordRep}
      handleSignup={handleSignup}
    />
  );
}

export default SignUp;
