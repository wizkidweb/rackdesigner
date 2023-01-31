import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RackIndexComponent } from './rack-index/rack-index.component';
import { RackDetailsComponent } from './rack-details/rack-details.component';
import { RackRoutingModule } from './rack-routing.module';

@NgModule({
  declarations: [
    RackIndexComponent,
    RackDetailsComponent
  ],
  imports: [
    CommonModule,
    RackRoutingModule,
  ]
})
export class RackModule { }
