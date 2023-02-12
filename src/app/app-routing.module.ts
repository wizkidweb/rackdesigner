import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'racks',
    loadChildren: () => import('./pages/racks/rack.module').then(m => m.RackModule),
  },
  {
    path: 'hardware',
    loadChildren: () => import('./pages/hardware/hardware.module').then(m => m.HardwareModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
