import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HardwareDetailsComponent } from "./hardware-details/hardware-details.component";
import { HardwareIndexComponent } from "./hardware-index/hardware-index.component";

const routes: Routes = [
  {
    path: '',
    component: HardwareIndexComponent,
    data: {
      title: 'Hardware',
    },
    children: [
      {
        path: '',
        component: HardwareIndexComponent,
      },
      {
        path: ':id',
        component: HardwareDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HardwareRoutingModule {
}