import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserIndexComponent } from "./user-index/user-index.component";

const routes: Routes = [
  {
    path: '',
    component: UserIndexComponent,
    data: {
      title: 'Users',
    },
    children: [
      {
        path: '',
        component: UserIndexComponent,
      },
      {
        path: ':id',
        component: UserDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}