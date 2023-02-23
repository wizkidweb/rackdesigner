import { AfterContentInit, AfterViewInit, Component, ContentChildren, Input, QueryList, ViewChildren } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'tr[app-tr-form]',
  templateUrl: './tr-form.component.html',
  styleUrls: ['./tr-form.component.scss']
})
export class TrFormComponent implements AfterContentInit {
  /**
   * The child FormInputComponent components.
   */
  @ContentChildren(FormInputComponent)
  public inputs!: QueryList<FormInputComponent>;

  /**
   * The form group to be passed down to child components.
   */
  @Input()
  public formGroup!: FormGroup;

  /**
   * Populate relevant data for FormInputComponent children after initialization.
   */
  public ngAfterContentInit(): void {
    this.inputs?.forEach(input => {
      input.form = this.formGroup;
      input.fill = (input.fill === undefined) ? true : input.fill;
    });
  }
}
