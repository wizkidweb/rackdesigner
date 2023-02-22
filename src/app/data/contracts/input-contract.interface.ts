import { FormControl } from "@angular/forms";

export interface InputContract<T> {
  name: string;
  value: T;
  required: boolean;
  label: string;
  disabled: boolean;

  toFormControl(): FormControl;
}