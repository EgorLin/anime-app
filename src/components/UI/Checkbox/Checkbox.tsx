import { ReactElement, useState } from "react";
import CheckboxItem from "./CheckboxItem";

interface IProps {
  title: string;
}

function Checkbox({ title }: IProps): ReactElement {
  const [showPopUp, setShowPopUp] = useState(false);

  function changeVisibility(value?: boolean): void {
    if (value === undefined) {
      setShowPopUp((prev) => !prev);
    } else {
      setShowPopUp(value);
    }
  }

  return (
    <CheckboxItem
      title={title}
      showPopUp={showPopUp}
      changeVisibility={changeVisibility}
    />
  );
}

export default Checkbox;
