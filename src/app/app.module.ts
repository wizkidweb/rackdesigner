import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RACK_SERVICE } from './data/contracts/rack-service-contract.interface';
import { LocalRackService } from './services/local/model/rack.service';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { dbConfig } from './services/local/db.config';
import { HARDWARE_SERVICE } from './data/contracts/hardware-service-contracts.interface';
import { LocalHardwareService } from './services/local/model/hardware.service';

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
