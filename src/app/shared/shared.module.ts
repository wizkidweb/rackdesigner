import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RackPreviewComponent } from './rack-preview/rack-preview.component';
import { PortComponent } from './port/port.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { RackConnectionComponent } from './rack-connection/rack-connection.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeComponent } from './badge/badge.component';
import { FormsModule } from '@angular/forms';
import { RackHardwareComponent } from './rack-hardware/rack-hardware.component';

const components = [
  RackPreviewComponent,
  PortComponent,
  RackConnectionComponent,
  RackHardwareComponent,
  LoadingSpinnerComponent,
  BadgeComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    PopoverModule.forRoot(),
    FontAwesomeModule,
    FormsModule,
  ],
  exports: components,
})
export class SharedModule { }
