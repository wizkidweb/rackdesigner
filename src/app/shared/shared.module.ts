import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RackPreviewComponent } from './rack-preview/rack-preview.component';
import { PortComponent } from './port/port.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { RackConnectionComponent } from './rack-connection/rack-connection.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeComponent } from './badge/badge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RackHardwareComponent } from './rack-hardware/rack-hardware.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { TrFormComponent } from './tr-form/tr-form.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ErrorMsgPipe } from './pipes/error-msg.pipe';

const components = [
  RackPreviewComponent,
  PortComponent,
  RackConnectionComponent,
  RackHardwareComponent,
  LoadingSpinnerComponent,
  BadgeComponent,
  ConfirmModalComponent,
  TrFormComponent,
  FormInputComponent,
];

const pipes = [
  ErrorMsgPipe,
];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [
    CommonModule,
    PopoverModule.forRoot(),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [...components, ...pipes],
})
export class SharedModule { }
