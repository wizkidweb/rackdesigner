import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DevicePort } from 'src/app/models/connection.model';
import { Device } from 'src/app/models/device.model';
import { Port } from 'src/app/models/port.model';

@Component({
  selector: 'app-rack-port',
  templateUrl: './rack-port.component.html',
  styleUrls: ['./rack-port.component.scss']
})
export class RackPortComponent {
  @Input()
  public port!: Port;

  @Input()
  public device!: Device;

  @Output()
  public selected: EventEmitter<DevicePort> = new EventEmitter<DevicePort>();

  @ViewChild('portRef')
  public portRef!: ElementRef;

  public xPos(pos: number): string {
    return (1.45 * pos) + 'em';
  }

  public yPos(pos: number): string {
    return (1.6 * pos) + 'em';
  }

  public emitPortDevice(): void {
    this.selected.emit({ device: this.device, port: this.port });
  }
}
