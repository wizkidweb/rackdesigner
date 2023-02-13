import { Component, Input } from '@angular/core';
import { Port } from 'src/app/models/port.model';

@Component({
  selector: 'app-rack-hardware',
  templateUrl: './rack-hardware.component.html',
  styleUrls: ['./rack-hardware.component.scss']
})
export class RackHardwareComponent {
  @Input()
  public size: number = 1;

  @Input()
  public ports: Array<Port> = [];

  // private _rj45Group(count: number, rowSize: number, x = 0, y = 0, startIndex = 0, power?: number): Array<Port> {
  //   return [...Array(count).keys()].map(i => this._rj45(
  //     i + startIndex,
  //     (i % rowSize) + x,
  //     Math.floor(i / rowSize) + y,
  //     power
  //   ));
  // }

  // private _rj45(id: number, x: number, y: number, power?: number): Port {
  //   return Port.create({
  //     id: id,
  //     type: 'rj45',
  //     xPos: x,
  //     yPos: y,
  //     output: power
  //   });
  // }
}
