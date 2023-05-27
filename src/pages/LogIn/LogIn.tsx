import { ReactElement } from "react";
import LogInItem from "./LogInItem";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  IForm,
  IFormConfig,
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
        type: InputTypes.CURRENT_PASSWORD,
        isRequired: true,
        minLength: 6,
      },
    ],
    onSubmit: function(this: IForm, e) {
      e.preventDefault();

      const auth = getAuth();
      let isErrorExist = false;
      const email = this.fields.find(
        (field) => field.inputType === InputTypes.EMAIL
      );
      const password = this.fields.find(
        (field) => field.inputType === InputTypes.CURRENT_PASSWORD
      );

      signInWithEmailAndPassword(auth, email!.value, password!.value)
        .then((userCredential) => { })
        .catch((error) => {
          isErrorExist = true;
          switch (error.code) {
            case "auth/invalid-email":
            case "auth/user-not-found":
              email!.addCustomErrorMessage("Incorrect email");
              break;
            case "auth/wrong-password":
              password!.addCustomErrorMessage("Incorrect password");
              break;
            default:
          }
        })
        .finally(() => {
          if (!isErrorExist) {
            navigate(RouteNames.HOME);
          }
        });
    },
  };
  const { inputData, onChange } = useValidation(config);
  const hasError = inputData.fields.some((field) => {
    for (const error of Object.entries(field.errors)) {
      const isNotEmpty = error[1] !== "";
      if (isNotEmpty) {
        return true;
      }
    }
    return false;
  });

  const navigate = useNavigate();

  return (
    <LogInItem inputData={inputData} onChange={onChange} hasError={hasError} />
  );
}

export default LogIn;
