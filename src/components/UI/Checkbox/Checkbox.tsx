import { ReactElement, useState } from "react";
import CheckboxItem from "./CheckboxItem";

function Checkbox(): ReactElement {
  const [showPopUp, setShowPopUp] = useState(false);

  function changeVisibility(value?: boolean): void {
    if (value === undefined) {
      setShowPopUp((prev) => !prev);
    } else {
      setShowPopUp(value);
    }
  }

  return (
    <CheckboxItem showPopUp={showPopUp} changeVisibility={changeVisibility} />
  );
}

export default Checkbox;
