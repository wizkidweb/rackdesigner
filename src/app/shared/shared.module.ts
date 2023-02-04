import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RackPreviewComponent } from './rack-preview/rack-preview.component';
import { RackPortComponent } from './rack-port/rack-port.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { RackConnectionComponent } from './rack-connection/rack-connection.component';

const components = [
  RackPreviewComponent,
  RackPortComponent,
  RackConnectionComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    PopoverModule.forRoot(),
  ],
  exports: components,
})
export class SharedModule { }
