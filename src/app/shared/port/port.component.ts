import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { faEthernet } from '@fortawesome/pro-duotone-svg-icons';
import { DevicePort } from 'src/app/models/connection.model';
import { Device } from 'src/app/models/device.model';
import { Port } from 'src/app/models/port.model';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.scss'],
})
export class PortComponent {
  @Input()
  public port!: Port;

  @Input()
  public device!: Device;

  @Output()
  public selected: EventEmitter<DevicePort> = new EventEmitter<DevicePort>();

  @ViewChild('portRef')
  public portRef!: ElementRef;

  @HostBinding('class')
  public get classes(): string {
    if (this.port) {
      return `xpos-${this.port.xPos} ypos-${this.port.yPos}`;
    }

    return '';
  }

  public faEthernet = faEthernet;

  public emitPortDevice(): void {
    this.selected.emit({ device: this.device, port: this.port });
  }
}
