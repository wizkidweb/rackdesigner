import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RackPreviewComponent } from './rack-preview/rack-preview.component';
import { RackPortComponent } from './rack-port/rack-port.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { RackConnectionComponent } from './rack-connection/rack-connection.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
  RackPreviewComponent,
  RackPortComponent,
  RackConnectionComponent,
  LoadingSpinnerComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    PopoverModule.forRoot(),
    FontAwesomeModule,
  ],
  exports: components,
})
export class SharedModule { }
