import { Component, HostBinding, Input } from '@angular/core';
import { faEthernet } from '@fortawesome/pro-duotone-svg-icons';
import { Port } from 'src/app/models/port.model';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.scss'],
})
export class PortComponent {
  /**
   * @see {@link faEthernet}
   */
  public readonly faEthernet = faEthernet;

  /**
   * The related port model.
   */
  @Input()
  public port!: Port;

  /**
   * Defines the CSS classes for the host component.
   */
  @HostBinding('class')
  public get classes(): string {
    if (this.port) {
      return `xpos-${this.port.xPos} ypos-${this.port.yPos}`;
    }

    return '';
  }
}
