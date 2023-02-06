import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalRackService } from './services/local/model/rack.service';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { dbConfig } from './services/local/db.config';
import { HARDWARE_SERVICE, RACK_SERVICE, USER_SERVICE } from './data/contracts/model-service-contract.interface';
import { LocalHardwareService } from './services/local/model/hardware.service';
import { LocalUserService } from './services/local/model/user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [
    { provide: RACK_SERVICE, useClass: LocalRackService },
    { provide: HARDWARE_SERVICE, useClass: LocalHardwareService },
    { provide: USER_SERVICE, useClass: LocalUserService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
