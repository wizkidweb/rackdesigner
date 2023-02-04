import { Component, OnInit } from '@angular/core';
import { Rack } from 'src/app/models/rack.model';
import { Device } from 'src/app/models/device.model';
import { Port } from 'src/app/models/port.model';
import { RackService } from 'src/app/services/model/rack.service';
import { Hardware } from 'src/app/models/hardware.model';
import { Connection } from 'src/app/models/connection.model';

@Component({
  selector: 'app-rack-index',
  templateUrl: './rack-index.component.html',
  styleUrls: ['./rack-index.component.scss']
})
export class RackIndexComponent implements OnInit {
  public racks: Array<Rack> = [];

  constructor(private _rackService: RackService) {}

  public ngOnInit(): void {
    this.racks = [
      Rack.create({
        id: 1,
        name: 'Test Rack',
        size: 20,
        devices: [
          Device.create({
            id: 1,
            hardware: this._udm(),
          }),
          Device.create({
            id: 2,
            hardware: this._switch48(),
          }),
          Device.create({
            id: 3,
            hardware: this._patch24(),
          }),
          Device.create({
            id: 4,
            hardware: this._switch24PoE(),
          }),
        ],
        connections: [
          Connection.create({
            from: { device: Device.create({ id: 1, hardware: this._udm() }), port: this._rj45(8, 27, 1) },
            to: { device: Device.create({ id: 3, hardware: this._switch48() }), port: this._rj45(23, 27, 0.5) },
            color: 'red'
          }),
          Connection.create({
            from: { device: Device.create({ id: 1, hardware: this._udm() }), port: this._rj45(10, 28, 1) },
            to: { device: Device.create({ id: 2, hardware: this._switch48() }), port: this._rj45(49, 28, 0) },
            color: 'green'
          }),
          Connection.create({
            from: { device: Device.create({ id: 2, hardware: this._switch48() }), port: this._rj45(51, 28, 1) },
            to: { device: Device.create({ id: 4, hardware: this._switch24PoE() }), port: this._rj45(24, 28, 0) },
            color: 'green'
          }),
        ]
      })
    ]
  }

  private _blankPlate(): Hardware {
    return Hardware.create({
      id: 1,
      name: 'Blank Plate',
      size: 1,
      ports: [],
      color: '#666',
    });
  }

  private _udm(): Hardware {
    return Hardware.create({
      id: 2,
      name: 'UDM Pro',
      size: 1,
      ports: [
        ...this._rj45Group(8, 4, 22),
        this._rj45(8, 27, 1),
        this._sfp(9, 28, 0),
        this._sfp(10, 28, 1),
      ],
    });
  }

  private _switch48(): Hardware {
    return Hardware.create({
      id: 3,
      name: 'Switch 48',
      size: 1,
      ports: [
        ...this._rj45Group(48, 24, 2),
        ...this._sfpGroup(4, 2, 27, 0, 48)
      ],
    })
  }

  private _patch24(): Hardware {
    return Hardware.create({
      id: 4,
      name: 'Patch Panel 24',
      size: 1,
      ports: [
        ...this._rj45Group(6, 6, 1, 0.5),
        ...this._rj45Group(6, 6, 8.25, 0.5, 6),
        ...this._rj45Group(6, 6, 15.5, 0.5, 12),
        ...this._rj45Group(6, 6, 22.75, 0.5, 18),
      ]
    })
  }

  private _switch24PoE(): Hardware {
    return Hardware.create({
      id: 5,
      name: 'Switch 24',
      size: 1,
      ports: [
        ...this._rj45Group(24, 12, 14, 0, 0, 32),
        this._sfp(24, 28, 0),
        this._sfp(25, 28, 1),
      ]
    })
  }

  private _rj45Group(count: number, rowSize: number, x = 0, y = 0, startIndex = 0, power?: number): Array<Port> {
    return [...Array(count).keys()].map(i => this._rj45(
      i + startIndex,
      (i % rowSize) + x,
      Math.floor(i / rowSize) + y,
      power
    ));
  }

  private _rj45(id: number, x: number, y: number, power?: number): Port {
    return Port.create({
      id: id,
      type: 'rj45',
      xPos: x,
      yPos: y,
      output: power
    });
  }

  private _sfpGroup(count: number, rowSize: number, x = 0, y = 0, startIndex = 0): Array<Port> {
    return [...Array(count).keys()].map(i => this._sfp(
      i + startIndex,
      (i % rowSize) + x,
      Math.floor(i / rowSize) + y,
    ));
  }

  private _sfp(id: number, x: number, y: number): Port {
    return Port.create({
      id: id,
      type: 'sfp+',
      xPos: x,
      yPos: y,
    });
  }
}
