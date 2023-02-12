import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PagesModule } from '../pages.module';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UserIndexComponent,
    UserDetailsComponent
  ],
  imports: [
    PagesModule,
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
  ]
})
export class UsersModule { }
