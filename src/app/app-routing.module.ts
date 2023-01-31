import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'objects',
      },
      {
        path: 'locations',
        loadChildren: () => import('./pages/locations/location.module').then(m => m.LocationModule),
      },
      {
        path: 'racks',
        loadChildren: () => import('./pages/racks/rack.module').then(m => m.RackModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
