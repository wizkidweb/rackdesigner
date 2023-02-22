import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BootstrapColor } from 'src/app/data/types/bootstrap.types';

export type TrFormInput = Record<string, Partial<TrFormInputOptions>>;

export type TrFormInputs = Array<string> | TrFormInput;

type TrFormInputOptions = {
  required: boolean,
  label: string,
  type: 'text' | 'number',
  value: string,
  validators: Array<ValidatorFn>,
}

type TrFormDisplayInputs = Array<Partial<TrFormInputOptions> & { name: string }>;

export type TrFormOutput<T> =
  T extends Array<string> ? { [K in T[number]]: string } :
  T extends TrFormInput ? { [K in keyof T]: string } : never;

@Component({
  selector: 'tr[app-tr-form]',
  templateUrl: './tr-form.component.html',
  styleUrls: ['./tr-form.component.scss']
})
export class TrFormComponent implements OnInit {
  /**
   * The inputs to display in this form component.
   */
  @Input()
  public inputs!: TrFormInputs;

  /**
   * The Bootstrap color of the submit button.
   */
  @Input()
  public submitColor: BootstrapColor = BootstrapColor.primary;

  /**
   * The label displayed in the submit button.
   */
  @Input()
  public submitLabel: string = 'Add';

  /**
   * If true, the form is disabled.
   */
  @Input()
  public disabled: boolean = false;

  @Output()
  public submitted: EventEmitter<TrFormOutput<typeof this.inputs>> = new EventEmitter<TrFormOutput<typeof this.inputs>>();

  /**
   * The dynamically-generated form group.
   */
  public formGroup!: FormGroup;

  /**
   * An array of input options with an added `name` property.
   * @see {@link inputs}
   */
  public formInputs: TrFormDisplayInputs = [];

  constructor(private _fb: FormBuilder) {}

  /**
   * On component init, create the form group and populate the form inputs array.
   */
  public ngOnInit(): void {
    this.formGroup = this._createFormGroup();
    this.formInputs = this._parseFormInputs();
  }

  /**
   * Creates a form group from the given `inputs` array/object.
   * @returns The dynamically-generated form group.
   */
  private _createFormGroup(): FormGroup {
    if (Array.isArray(this.inputs)) {
      return new FormGroup(this.inputs.reduce((carry, input) => {
        carry[input] = new FormControl({ value: '', disabled: this.disabled }, Validators.required);
        return carry;
      }, {} as Record<string, FormControl>))
    }

    return new FormGroup(Object.entries(this.inputs).reduce((carry, [name, input]) => {
      carry[name] = new FormControl({ value: '', disabled: this.disabled }, Validators.required);
      return carry;
    }, {} as Record<string, FormControl>));
  }

  /**
   * Parses the given `inputs` array/object into a parseable array for the view.
   * @returns An array of input options with an added `name` property.
   */
  private _parseFormInputs(): TrFormDisplayInputs {
    if (Array.isArray(this.inputs)) {
      return this.inputs.map(input => ({ name: input }));
    }

    return Object.entries(this.inputs).map(([name, input]) => ({
      name, ...input
    }));
  }

  /**
   * Emits the submitted form's value.
   * @param e The click event
   */
  public submitForm(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();

    this.submitted.emit(this.formGroup.getRawValue());
    this.formGroup.reset();
  }

  /**
   * Determines if the given form control is invalid.
   * @param control The related Form Control
   * @returns True if the form is invalid, false if valid.
   */
  public isInvalid(control: AbstractControl): boolean {
    return control.invalid && control.dirty;
  }

  /**
   * Formats the given key name into a Title Case.
   * @param name The key name to format.
   * @returns The name formatted into Title Case.
   */
  public formatLabel(name: string): string {
    return name.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
      .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase());
  }
}
