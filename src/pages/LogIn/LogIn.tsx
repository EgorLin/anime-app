import { ReactElement } from "react";
import LogInItem from "./LogInItem";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  IFormConfig,
  InputErrorTypes,
  InputTypes,
  useValidation,
} from "../../hooks/useInput";
import { RouteNames } from "../../router";

function LogIn(): ReactElement {
  const config: IFormConfig = {
    fields: [
      {
        type: InputTypes.EMAIL,
        isRequired: true,
        template: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      },
      {
        type: InputTypes.PASSWORD,
        isRequired: true,
        minLength: 6,
      },
    ],
    onSubmit: (e) => {
      e.preventDefault();
      handleSubmit();
    },
  };
  const inputData = useValidation(config);

  const navigate = useNavigate();

  function handleSubmit() {
    const auth = getAuth();
    let isErrorExist = false;
    const email = inputData.fields.find(
      (field) => field.type === InputTypes.EMAIL
    );
    const password = inputData.fields.find(
      (field) => field.type === InputTypes.PASSWORD
    );
    console.log(inputData, email!.value, password!.value);
    signInWithEmailAndPassword(auth, email!.value, password!.value)
      .then((userCredential) => { })
      .catch((error) => {
        isErrorExist = true;
        if (error.code === "auth/invalid-email") {
          email?.addCustomErrorMessage("Incorrect email or password");
        }
        console.log(error.code);
        return;
      })
      .finally(() => {
        if (!isErrorExist) {
          navigate(RouteNames.HOME);
        }
      });
  }

  return <LogInItem inputData={inputData} />;
}

export default LogIn;
