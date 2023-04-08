import { ReactElement, useState } from "react";
import CheckboxItem from "./CheckboxItem";

interface IProps {
  title: string;
  data: string[][];
  activeList: string[];
  onChange: (newValue: string) => void;
}

function Checkbox({ title, data, activeList, onChange }: IProps): ReactElement {
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
      data={data}
      activeList={activeList}
      onChange={onChange}
    />
  );
}

export default Checkbox;
