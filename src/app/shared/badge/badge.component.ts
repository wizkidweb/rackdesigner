import { Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
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
  @Input()
  public color: BootstrapColor = BootstrapColor.secondary;

  @Input()
  public pill: boolean = false;

  @Input()
  public editable: boolean = false;

  @Input()
  public label!: string;

  @ContentChild(TemplateRef) valueTemplate!: TemplateRef<any>;

  public onChange = (value: string) => {};
  public onTouched = () => {};
  
  public touched = false;
  public disabled = false;

  public faPen = faPen;
  public faCheck = faCheck;

  public editing = false;

  public value: string = '';
  public valueTerm: string = '';

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

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.valueTerm = this.value;
    }
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: (value: string) => any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }

  public markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  public edit(): void {
    if (this.editable && !this.editing) {
      this.editing = true;
    }
  }

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
