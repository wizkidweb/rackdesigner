import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RackDetailsComponent } from "./rack-details/rack-details.component";
import { RackIndexComponent } from "./rack-index/rack-index.component";

const routes: Routes = [
  {
    path: '',
    component: RackIndexComponent,
  },
  {
    path: ':id',
    component: RackDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RackRoutingModule {
}