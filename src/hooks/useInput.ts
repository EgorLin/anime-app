import { useEffect, useState } from "react";
import { IInputError, IInputValidation } from "../types/IInput";

export default function useInput(
  initialValue: string,
  validations: IInputValidation
) {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const errors = useValidation(value, validations);

  function onChange(value: string) {
    setIsDirty(true);
    setValue(value);
  }

  return { errors, isDirty, input: { value, onChange } };
}

export function useValidation(value: string, validations: IInputValidation) {
  const [isEmpty, setIsEmpty] = useState("");
  const [minLength, setMinLength] = useState("");

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          if (value) {
            console.log("it's not empty");
            setIsEmpty("");
          } else {
            console.log("it's empty");
            setIsEmpty("Input is empty");
          }
          break;
        case "minLength":
          if (value.length >= validations[validation]) {
            setMinLength("");
          } else {
            setMinLength("Value is too short");
          }
          break;
      }
    }
  }, [value]);

  return { isEmpty, minLength } as IInputError;
}
