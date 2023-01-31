import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationTableComponent } from './location-table/location-table.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationRoutingModule } from './location-routing.module';

@NgModule({
  declarations: [
    LocationTableComponent,
    LocationDetailsComponent,
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
  ]
})
export class LocationModule { }
