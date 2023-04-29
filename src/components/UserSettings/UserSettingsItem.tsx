import { ReactElement } from "react";
import { IForm } from "../../hooks/useInput";
import Input from "../UI/Input/Input";
import styles from "./UserSettings.module.scss";

interface IProps {
  inputData: IForm;
  onInputChange: (...args: any[]) => void;
  hasError: boolean;
}

function UserSettingsItem({
  inputData,
  onInputChange,
  hasError,
}: IProps): ReactElement {
  const inputs = inputData.fields.map((input) => (
    <Input
      key={input.inputType}
      className={styles.input}
      placeholder={input.placeholder}
      type={input.type}
      inputType={input.inputType}
      value={input.value}
      errors={input.errors}
      isDirty={input.isDirty}
      onBlur={input.onBlur}
      changeValue={onInputChange}
    />
  ));

  return (
    <div className={["wrapperM", styles.container].join(" ")}>
      {inputs}

      <button
        className={[
          styles.button,
          hasError ? styles.disabledButton : styles.selected,
        ].join(" ")}
        onClick={(e) => inputData.onSubmit(e)}
        disabled={hasError}
      >
        Save
      </button>
    </div>
  );
}

export default UserSettingsItem;
