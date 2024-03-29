import { ChangeEvent, ReactElement } from "react";
import styles from "./Select.module.scss";

interface IProps {
  title: string;
  data: string[][];
  value: string;
  onChange: (newValue: string) => void;
}

function SelectItem({ title, data, value, onChange }: IProps): ReactElement {
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    onChange(e.target.value);
  }
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <select
          className={styles.select}
          value={value}
          onChange={(e) => handleChange(e)}
        >
          <option disabled>{title}</option>
          {data.map((element) => (
            <option key={element[0]} value={element[1]}>
              {element[0]}
            </option>
          ))}
        </select>
        <svg viewBox="0 -4.5 20 20">
          <g transform="translate(-220.000000, -6684.000000)">
            <g transform="translate(56.000000, 160.000000)">
              <path
                d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"
                id="arrow_down-[#338]"
              ></path>
            </g>
          </g>
        </svg>
      </label>
    </div>
  );
}

export default SelectItem;
