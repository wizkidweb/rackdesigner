/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-function */

import { Component, ContentChild, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faCheck, faPen } from '@fortawesome/pro-duotone-svg-icons';
import { BootstrapColor } from 'src/app/data/types/bootstrap.types';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: BadgeComponent,
    },
  ],
})
export class BadgeComponent implements OnChanges, ControlValueAccessor {
  /**
   * @see {@link faPen}
   */
  public readonly faPen = faPen;

  /**
   * @see {@link faCheck}
   */
  public readonly faCheck = faCheck;

  /**
   * The badge color.
   * @see {@link BootstrapColor}
   */
  @Input()
  public color: BootstrapColor = BootstrapColor.secondary;

  /**
   * If true, then the badge will be pill-shaped.
   */
  @Input()
  public pill = false;

  /**
   * If true, the badge will be editable and act as a form control.
   */
  @Input()
  public editable = false;

  /**
   * The label to display when editing the badge.
   */
  @Input()
  public label!: string;

  /**
   * The value template for content projection.
   */
  @ContentChild(TemplateRef) valueTemplate!: TemplateRef<any>;

  /**
   * The callback defined when the value is changed.
   * @param value The value that was changed.
   */
  public onChange = (_value: string) => {};

  /**
   * The callback defined when the value is touched.
   */
  public onTouched = () => {};
  
  /**
   * If the value has been touched, this will be true.
   */
  public touched = false;

  /**
   * Determines if the value is disabled.
   */
  public disabled = false;

  /**
   * If true, the editor is visible.
   */
  public editing = false;

  /**
   * The value displayed in the badge.
   */
  public value = '';

  /**
   * The value displayed in the edit box.
   */
  public valueTerm = '';

  /**
   * Gets a list of CSS class names to apply.
   */
  public get classes(): { [klass: string]: any } {
    return {
      'rounded-pill': this.pill,
      editable: this.editable,
      editing: this.editing,
      ['text-bg-' + this.color]: true,
    };
  }

  /**
   * When value is changed, update the edit box value.
   * @param changes The property change object.
   * @see {@link valueTerm}
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.valueTerm = this.value;
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
  public registerOnChange(fn: (value: string) => any): void {
    this.onChange = fn;
  }

  /**
   * @inheritDoc
   */
  public registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }

  /**
   * Marks the value as touched, and runs the defined callback.
   * @see {@link onTouched}
   */
  public markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  /**
   * @inheritDoc
   */
  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  /**
   * Opens the edit box if editable.
   * @see {@link editable}
   */
  public edit(): void {
    if (this.editable && !this.editing) {
      this.editing = true;
    }
  }

  /**
   * Saves the new badge value.
   */
  public save(e: MouseEvent): void {
    e.stopPropagation();

    if (this.editing) {
      this.markAsTouched();

      if (!this.disabled) {
        this.value = this.valueTerm;
        this.onChange(this.value);
      }

      this.editing = false;
    }
  }
}
