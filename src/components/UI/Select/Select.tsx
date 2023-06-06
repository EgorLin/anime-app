import { ReactElement } from "react";
import SelectItem from "./SelectItem";

interface IProps {
  title: string;
  data: string[][];
  value: string;
  onChange: (newValue: string) => void;
}

function Select({ title, data, value, onChange }: IProps): ReactElement {
  return (
    <SelectItem title={title} data={data} value={value} onChange={onChange} />
  );
}

export default Select;
