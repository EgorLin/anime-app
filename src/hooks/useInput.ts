import { MouseEvent, useState } from "react";

export enum InputTypes {
  USERNAME = "username",
  EMAIL = "email",
  PASSWORD = "password",
  REPEAT_PASSWORD = "repeatPassword",
}

export enum InputErrorTypes {
  REQUIRED = "isRequired",
  MINLENGTH = "minLength",
  MAXLENGTH = "maxLength",
  TEMPLATE = "template",
  RECHECK_PASSWORD = "recheckPassword",
  WRONGDATA = "wrongData",
}

interface IConfigField {
  type: string;
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  recheckPassword?: boolean;
  template?: RegExp;
}

export interface IInputErrors {
  isRequired?: string;
  minLength?: string;
  maxLength?: string;
  template?: string;
  recheckPassword?: string;
  customError?: string;
}

export interface IInput {
  inputType: string;
  placeholder: string;
  type: string;
  isDirty: boolean;
  value: string;
  errors: IInputErrors;
  onBlur: () => void;
  addCustomErrorMessage: (value: string) => void;
}

export interface IForm {
  fields: IInput[];
  onSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface IFormConfig {
  fields: IConfigField[];
  onSubmit: (...args: any[]) => void;
}

export function useValidation(config: IFormConfig) {
  const [inputData, setInputData] = useState<IForm>(initializeInputs(config));

  function onChange(newValue: string, type: string) {
    const errorMessages: IInputErrors = {};
    const validationRules = config.fields.find((field) => field.type === type);

    if (validationRules) {
      if (type === InputTypes.REPEAT_PASSWORD) {
        const passwordValue = inputData.fields.find(
          (field) => field.type === InputTypes.PASSWORD
        )?.value;
        validateInput(errorMessages, validationRules, newValue, passwordValue);
      } else {
        validateInput(errorMessages, validationRules, newValue);
      }
    }

    setInputData((oldData) => {
      const newFields = oldData.fields.map((data) => {
        if (data.type === type) {
          return {
            ...data,
            value: newValue,
            errors: JSON.parse(JSON.stringify(errorMessages)),
          };
        }
        return data;
      });

      const newData = { ...oldData, fields: newFields };

      return newData;
    });
  }

  return { inputData, onChange };

  function initializeInputs(config: IFormConfig) {
    const fields = config.fields.map((field) => {
      const errors = getErrorsFields(field);
      let type = "";
      let placeholder = "";
      if (field.type === InputTypes.REPEAT_PASSWORD) {
        type = InputTypes.PASSWORD;
        placeholder = "Repeat password";
      } else {
        type = field.type;
        placeholder = field.type[0].toUpperCase() + field.type.slice(1);
      }
      const fields: IInput = {
        type,
        placeholder,
        errors,
        inputType: field.type,
        value: "",
        isDirty: false,
        onBlur: () => onBlur.call(fields),
        addCustomErrorMessage: (...args) =>
          addCustomErrorMessage.call(fields, ...args),
      };

      return fields;
    });

    const data: IForm = {
      fields,
      onSubmit: config.onSubmit,
    };
    return data;
  }

  function onBlur(this: IInput) {
    if (!this.isDirty) {
      setInputData((oldData) => {
        const newFields = oldData.fields.map((data) => {
          if (data.type === this.type) {
            return {
              ...data,
              isDirty: true,
            };
          }
          return data;
        });

        const newData = { ...oldData, fields: newFields };

        return newData;
      });
    }
  }

  function getErrorsFields(field: IConfigField): IInputErrors {
    const errors = {} as IInputErrors;
    for (const error in field) {
      if (error === "type") continue;

      Object.defineProperty(errors, error, {
        enumerable: true,
        writable: true,
        value: "",
      });
    }

    validateInput(errors, field, "");
    return errors;
  }

  function validateInput(
    errorObject: IInputErrors,
    rules: IConfigField,
    newValue: string,
    additionalValue?: string
  ) {
    for (const rule in rules) {
      switch (rule) {
        case InputErrorTypes.REQUIRED:
          const isNotEmpty = newValue;
          Object.defineProperty(errorObject, InputErrorTypes.REQUIRED, {
            enumerable: true,
            value: isNotEmpty ? "" : "Input is empty",
          });
          break;
        case InputErrorTypes.MINLENGTH:
          const isGreaterMinLength = (rules[rule] ?? 0) <= newValue.length;
          Object.defineProperty(errorObject, InputErrorTypes.MINLENGTH, {
            enumerable: true,
            value: isGreaterMinLength
              ? ""
              : "Value should be longer than: " + rules[rule],
          });
          break;
        case InputErrorTypes.MAXLENGTH:
          const isLessMaxLength = (rules[rule] ?? 31) >= newValue.length;
          Object.defineProperty(errorObject, InputErrorTypes.MAXLENGTH, {
            enumerable: true,
            value: isLessMaxLength
              ? ""
              : "Value should be shorter than: " + rules[rule],
          });
          break;
        case InputErrorTypes.RECHECK_PASSWORD:
          const isEqualPassword = additionalValue === newValue;
          Object.defineProperty(errorObject, InputErrorTypes.RECHECK_PASSWORD, {
            enumerable: true,
            value: isEqualPassword ? "" : "Passwords are not equal",
          });
          break;
        case InputErrorTypes.TEMPLATE:
          const isFit = rules[rule]?.test(newValue);
          Object.defineProperty(errorObject, InputErrorTypes.TEMPLATE, {
            enumerable: true,
            value: isFit ? "" : "Wrong template to write",
          });
          break;
      }
    }
  }

  function addCustomErrorMessage(this: IInput, message: string) {
    setInputData((oldData) => {
      const newFields = oldData.fields.map((data) => {
        if (data.type === this.type) {
          return {
            ...data,
            errors: { ...data.errors, customError: message },
          };
        }
        return data;
      });

      return { ...oldData, fields: newFields };
    });
  }
}
