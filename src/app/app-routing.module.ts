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
        path: 'racks',
        loadChildren: () => import('./pages/racks/rack.module').then(m => m.RackModule),
      },
      {
        path: 'hardware',
        loadChildren: () => import('./pages/hardware/hardware.module').then(m => m.HardwareModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
