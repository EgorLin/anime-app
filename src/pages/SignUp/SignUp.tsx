import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseService from "../../api/FirebaseService";
import {
  IForm,
  IFormConfig,
  InputTypes,
  useValidation,
} from "../../hooks/useInput";
import { RouteNames } from "../../router";
import SignUpItem from "./SignUpItem";

function SignUp(): ReactElement {
  const config: IFormConfig = {
    fields: [
      {
        type: InputTypes.USERNAME,
        isRequired: true,
        minLength: 4,
        maxLength: 16,
      },

      {
        type: InputTypes.EMAIL,
        isRequired: true,
        template: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        maxLength: 32,
      },
      {
        type: InputTypes.PASSWORD,
        isRequired: true,
        minLength: 6,
        maxLength: 16,
      },
      {
        type: InputTypes.REPEAT_PASSWORD,
        isRequired: true,
        minLength: 6,
        maxLength: 16,
        recheckPassword: true,
      },
    ],
    onSubmit: function (this: IForm, e) {
      e.preventDefault();

      const auth = getAuth();
      let isErrorExist = false;
      const username = this.fields.find(
        (field) => field.type === InputTypes.USERNAME
      );
      const email = this.fields.find(
        (field) => field.type === InputTypes.EMAIL
      );
      const password = this.fields.find(
        (field) => field.type === InputTypes.PASSWORD
      );

      createUserWithEmailAndPassword(auth, email!.value, password!.value)
        .then(async (userCredential) => {
          const favorites: string[] = [];
          await FirebaseService.addNewUser(
            userCredential.user.uid,
            username!.value,
            email!.value,
            favorites
          );
        })
        .catch((error) => {
          isErrorExist = true;
          switch (error.code) {
            case "auth/invalid-email":
              // case "auth/user-not-found":
              email!.addCustomErrorMessage("Incorrect email");
              break;
            case "auth/email-already-in-use":
              email!.addCustomErrorMessage("Email already in use");
              break;
            case "auth/wrong-password":
              password!.addCustomErrorMessage("Incorrect password");
              break;
            default:
              console.log(error.code);
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
    <SignUpItem
      inputData={inputData}
      onInputChange={onChange}
      hasError={hasError}
    />
  );
}

export default SignUp;
