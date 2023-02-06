import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RackIndexComponent } from './rack-index/rack-index.component';
import { RackDetailsComponent } from './rack-details/rack-details.component';
import { RackRoutingModule } from './rack-routing.module';
import { PagesModule } from '../pages.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        RackIndexComponent,
        RackDetailsComponent,
    ],
    imports: [
        PagesModule,
        CommonModule,
        RackRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FontAwesomeModule,
    ]
})
export class RackModule { }
