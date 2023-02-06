import { Model } from "../data/abstracts/model";
import { Device } from "./device.model";
import { Port } from "./port.model";

export type DevicePort = {
  device: Device,
  port: Port
};

export class Connection extends Model {
  public from!: DevicePort;
  public to!: DevicePort;
  public color?: string = 'blue';
}