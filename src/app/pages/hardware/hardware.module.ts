import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardwareIndexComponent } from './hardware-index/hardware-index.component';
import { HardwareDetailsComponent } from './hardware-details/hardware-details.component';
import { PagesModule } from '../pages.module';
import { HardwareRoutingModule } from './hardware-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortTableComponent } from './port-table/port-table.component';

@NgModule({
  declarations: [
    HardwareIndexComponent,
    HardwareDetailsComponent,
    PortTableComponent
  ],
  imports: [
    PagesModule,
    CommonModule,
    HardwareRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
  ]
})
export class HardwareModule { }
