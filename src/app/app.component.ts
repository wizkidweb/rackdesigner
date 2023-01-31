import { Component } from '@angular/core';
import { faChartMixed, faHouse, faMapLocation, faServer } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public faHouse = faHouse;
  public faMapLocation = faMapLocation;
  public faServer = faServer;
}
