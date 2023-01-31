import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LocationDetailsComponent } from "./location-details/location-details.component";
import { LocationTableComponent } from "./location-table/location-table.component";

const routes: Routes = [
  {
    path: '',
    component: LocationTableComponent,
    data: {
      title: 'Locations',
    },
    children: [
      {
        path: '',
        component: LocationTableComponent,
      },
      {
        path: ':id',
        component: LocationDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {
}