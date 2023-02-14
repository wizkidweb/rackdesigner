import { AfterViewInit, Component, ElementRef, Input, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { Connection, DevicePort } from 'src/app/models/connection.model';
import { Device } from 'src/app/models/device.model';
import { Port } from 'src/app/models/port.model';
import { Rack } from 'src/app/models/rack.model';
import { PortComponent } from '../port/port.component';

// TODO: Update rack preview to support new port component.

declare var LeaderLine: any;

@Component({
  selector: 'app-rack-preview',
  templateUrl: './rack-preview.component.html',
  styleUrls: ['./rack-preview.component.scss']
})
export class RackPreviewComponent {
  @Input()
  public rack!: Rack;

  @ViewChildren(PortComponent)
  public portComponents!: QueryList<PortComponent>;

  public firstNode?: DevicePort;
  public lastNode?: DevicePort;

  public lines: Array<any> = [];

  // public ngAfterViewInit(): void {
  //   this.rack.connections?.forEach(connection =>
  //     this.connectPorts(connection)
  //   );
  // }

  // public ngOnDestroy(): void {
  //   this.clearLines();
  // }

  // public getPortRef(port: Port, device: Device): ElementRef | undefined {
  //   return this.portComponents.find(component => (
  //     component.port.id === port.id && component.device.id === device.id
  //   ))?.portRef;
  // }

  // public connectPorts(connection: Connection) {
  //   const fromRef = this.getPortRef(connection.from.port, connection.from.device);
  //   const toRef = this.getPortRef(connection.to.port, connection.to.device);

  //   const line = new LeaderLine(
  //     LeaderLine.pointAnchor(fromRef?.nativeElement),
  //     LeaderLine.pointAnchor(toRef?.nativeElement)
  //   );

  //   line.setOptions({
  //     startPlug: 'square',
  //     endPlug: 'square',
  //     color: connection.color,
  //     startSocketGravity: 10,
  //     endSocketGravity: 10
  //   })

  //   this.lines.push(line);
  // }

  // public clearLines() {
  //   this.lines.forEach(line => line.remove());
  // }

  // public setConnectionNode(devicePort: DevicePort): void {
  //   if (this.firstNode) {
  //     console.log('Setting Second Node');
  //     this.connectPorts(Connection.create({
  //       from: this.firstNode,
  //       to: devicePort
  //     }));

  //     this.firstNode = undefined;
  //     this.lastNode = undefined;
  //   } else {
  //     console.log('Setting First Node');
  //     this.firstNode = devicePort;
  //   }
  // }
}
