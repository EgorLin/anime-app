export interface IInputValidation {
  isEmpty: boolean;
  minLength: number;
}

export interface IInputError {
  isEmpty: string;
  minLength: string;
}

export interface IInput {
  errors: IInputError;
  isDirty: boolean;
  input: {
    value: string;
    onChange: (value: string) => void;
  };
}
