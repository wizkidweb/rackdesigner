import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardwareIndexComponent } from './hardware-index/hardware-index.component';
import { HardwareDetailsComponent } from './hardware-details/hardware-details.component';
import { PagesModule } from '../pages.module';
import { HardwareRoutingModule } from './hardware-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HardwareIndexComponent,
    HardwareDetailsComponent
  ],
  imports: [
    PagesModule,
    CommonModule,
    HardwareRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ]
})
export class HardwareModule { }
