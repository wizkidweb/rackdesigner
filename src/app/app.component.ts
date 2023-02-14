import { Component } from '@angular/core';
import { faHouse, faMapLocation, faServer, faComputerClassic, faUsers } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * @see {@link faHouse}
   */
  public readonly faHouse = faHouse;

  /**
   * @see {@link faMapLocation}
   */
  public readonly faMapLocation = faMapLocation;

  /**
   * @see {@link faServer}
   */
  public readonly faServer = faServer;

  /**
   * @see {@link faComputerClassic}
   */
  public readonly faComputerClassic = faComputerClassic;

  /**
   * @see {@link faUsers}
   */
  public readonly faUsers = faUsers;
}
