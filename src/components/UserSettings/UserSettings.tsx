import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { ReactElement } from "react";
import FirebaseService from "../../api/FirebaseService";
import {
  IForm,
  IFormConfig,
  InputTypes,
  useValidation,
} from "../../hooks/useInput";
import UserSettingsItem from "./UserSettingsItem";

function UserSettings(): ReactElement {
  const config: IFormConfig = {
    fields: [
      {
        type: InputTypes.IMAGE_URL,
        isRequired: true,
        template: /(https?:\/\/.*\.(?:png|jpg))/i,
      },
      {
        type: InputTypes.CURRENT_PASSWORD,
        // isRequired: true,
        minLength: 6,
        maxLength: 16,
      },
      {
        type: InputTypes.NEW_PASSWORD,
        // isRequired: true,
        minLength: 6,
        maxLength: 16,
      },
      {
        type: InputTypes.REPEAT_PASSWORD,
        // isRequired: true,
        minLength: 6,
        maxLength: 16,
        recheckPassword: true,
      },
    ],
    onSubmit: function(this: IForm, e) {
      e.preventDefault();

      const auth = getAuth();
      let isErrorExist = false;
      const newImageUrl = this.fields.find(
        (field) => field.inputType === InputTypes.IMAGE_URL
      );
      const currentPassword = this.fields.find(
        (field) => field.inputType === InputTypes.CURRENT_PASSWORD
      );
      const newPassword = this.fields.find(
        (field) => field.inputType === InputTypes.NEW_PASSWORD
      );

      if (newImageUrl?.value !== "" && newImageUrl?.isDirty) {
        (async function() {
          await FirebaseService.updateUserImageUrl(
            auth.currentUser!.uid,
            newImageUrl!.value.trim()
          );
        })();
      }

      if (currentPassword?.isDirty && newPassword?.isDirty) {
        if (auth.currentUser?.email) {
          const credential = EmailAuthProvider.credential(
            auth.currentUser!.email,
            currentPassword!.value
          );

          reauthenticateWithCredential(auth.currentUser!, credential).catch(
            (error) => {
              console.log(error.code);
            }
          );

          updatePassword(auth.currentUser!, newPassword!.value)
            .then(() => { })
            .catch((error) => {
              isErrorExist = true;
              switch (error.code) {
                case "auth/wrong-password":
                  newPassword!.addCustomErrorMessage("Incorrect password");
                  break;
                default:
                  console.log(error.code);
              }
            })
            .finally(() => {
              if (!isErrorExist) {
              }
            });
        }
      }
    },
  };

  const { inputData, onChange } = useValidation(config);
  const hasError = inputData.fields.some((field) => {
    if (field.isDirty) {
      for (const error of Object.entries(field.errors)) {
        const isNotEmpty = error[1] !== "";
        if (isNotEmpty) {
          return true;
        }
      }
    }
    return false;
  });

  return (
    <UserSettingsItem
      inputData={inputData}
      onInputChange={onChange}
      hasError={hasError}
    />
  );
}

export default UserSettings;
