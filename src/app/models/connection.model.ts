import { Model } from "../data/abstracts/model";
import { Device } from "./device.model";
import { Port } from "./port.model";

/**
 * A compound model reference that combines device and port.
 */
export type DevicePort = {
  device: Device,
  port: Port
};

export class Connection extends Model {
  /**
   * The starting point of the connection.
   */
  public from!: DevicePort;

  /**
   * The ending point of the connection.
   */
  public to!: DevicePort;

  /**
   * The color of the connection.
   */
  public color?: string = 'blue';
}