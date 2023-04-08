import { ReactElement } from "react";
import CheckboxButtonItem from "./CheckboxButtonItem";

interface IProps {
  value: string;
  title: string;
  onChange: (newValue: string) => void;
  isSelected: boolean;
}

function CheckboxButton({
  value,
  title,
  onChange,
  isSelected,
}: IProps): ReactElement {
  function handleClick(): void {
    onChange(value);
  }

  return (
    <CheckboxButtonItem
      title={title}
      isSelected={isSelected}
      handleClick={handleClick}
    />
  );
}

export default CheckboxButton;
