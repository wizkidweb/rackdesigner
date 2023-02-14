import { Component, Input } from '@angular/core';
import { Port } from 'src/app/models/port.model';

@Component({
  selector: 'app-rack-hardware',
  templateUrl: './rack-hardware.component.html',
  styleUrls: ['./rack-hardware.component.scss']
})
export class RackHardwareComponent {
  /**
   * The size of the hardware, in "U".
   */
  @Input()
  public size: number = 1;

  /**
   * The ports to be displayed.
   */
  @Input()
  public ports: Array<Port> = [];
}
