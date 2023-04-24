import { MouseEvent, useState } from "react";

export enum InputTypes {
  USERNAME = "username",
  EMAIL = "email",
  PASSWORD = "password",
}

export enum InputErrorTypes {
  REQUIRED = "isRequired",
  MINLENGTH = "minLength",
  TEMPLATE = "template",
  WRONGDATA = "wrongData",
}

interface IConfigField {
  type: string;
  isRequired?: boolean;
  minLength?: number;
  template?: RegExp;
}

export interface IInputErrors {
  isRequired?: string;
  minLength?: string;
  template?: string;
  customError?: string;
}

export interface IInput {
  type: string;
  isDirty: boolean;
  value: string;
  errors: IInputErrors;
  onChange: (value: string) => void;
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

  return inputData;

  function initializeInputs(config: IFormConfig) {
    const fields = config.fields.map((field) => {
      const errors = getErrorsFields(field);
      const fields: IInput = {
        type: field.type,
        value: "",
        isDirty: false,
        errors,
        onChange: (...args) => onChange.call(fields, ...args),
        onBlur: () => onBlur.call(fields),
        addCustomErrorMessage: (...args) =>
          addCustomErrorMessage.call(fields, ...args),
      };

      return fields;
    });

    return {
      fields,
      onSubmit: config.onSubmit,
    } as IForm;
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
    newValue: string
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
            value: isGreaterMinLength ? "" : "Value is too short",
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

  function onChange(this: IInput, newValue: string) {
    const errorMessages: IInputErrors = {};
    const validationRules = config.fields.find(
      (field) => field.type === this.type
    );

    if (validationRules) {
      validateInput(errorMessages, validationRules, newValue);
    }

    setInputData((oldData) => {
      const newFields = oldData.fields.map((data) => {
        if (data.type === this.type) {
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
}
