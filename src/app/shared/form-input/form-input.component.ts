import { Component, HostBinding, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ValidatorFn, Validators } from '@angular/forms';
import { ErrorMessage } from '../pipes/error-msg.pipe';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FormInputComponent,
    },
  ],
})
export class FormInputComponent implements ControlValueAccessor {
  /**
   * The current input value.
   */
  public value!: string;

  /**
   * The label to display. If this is undefined, the label is inferred from {@link formControlName}
   */
  @Input()
  public label!: string;

  /**
   * The input type.
   */
  @Input()
  public type: 'text' | 'number' = 'text';

  /**
   * The reactive forms form control name. Used for label if it's not provided.
   */
  @Input()
  public formControlName!: string;

  /**
   * If true, "flex-fill" class is applied to the host.
   */
  @Input()
  public fill!: boolean;

  /**
   * The parent form group. This is populated by the wrapping form component.
   */
  public form!: FormGroup;

  /**
   * The callback for when the value is changed.
   * @param _value The value changed.
   */
  public onChange = (_value: string) => {};

  /**
   * The callback for when the value is touched.
   */
  public onTouched = () => {};

  /**
   * If true, the value has been touched.
   */
  public touched = false;
  
  /**
   * If true, the input is disabled.
   */
  public disabled = false;

  /**
   * Sets the host class property based on input values.
   */
  @HostBinding('class')
  public get classes(): string {
    if (this.fill) {
      return 'flex-fill';
    }

    return '';
  }

  /**
   * The current form control, inferred from the {@link form} property.
   */
  public get formControl(): AbstractControl | undefined {
    return this.form?.controls?.[this.formControlName];
  }

  /**
   * Returns true if the current form control is both dirty and invalid.
   */
  public get invalid(): boolean {
    if (this.formControl) {
      return this.formControl.dirty && this.formControl.invalid;
    }

    return false;
  }

  /**
   * Returns an array of form input errors to be used in the errorMsg pipe.
   */
  public get errors(): Array<ErrorMessage> {
    return Object.entries(this.formControl?.errors || {}).map(value => ({
      key: value[0],
      error: value[1],
    }));
  }

  /**
   * Triggers the {@link onChange} event if the input is enabled.
   */
  public update(): void {
    this.markAsTouched();
    if (!this.disabled) {
      console.log('Calling onChange');
      this.onChange(this.value);
    }
  }

  /**
   * @inheritDoc
   */
  public writeValue(value: string): void {
    this.value = value;
  }

  /**
   * @inheritDoc
   */
  public registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  /**
   * @inheritDoc
   */
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
  
  /**
   * Marks the input as touched.
   */
  public markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  /**
   * Sets the current input disabled state.
   */
  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  /**
   * Formats the given key name into a Title Case.
   * @param name The key name to format.
   * @returns The name formatted into Title Case.
   */
  public formatLabel(name: string): string {
    return name.replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  }
}
