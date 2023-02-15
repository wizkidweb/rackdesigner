import { Model } from "../data/abstracts/model";
import { Connection } from "./connection.model";
import { Device } from "./device.model";

export class Rack extends Model {
  /**
   * The name of the rack.
   */
  public name!: string;

  /**
   * The size of the rack, in "U".
   */
  public size!: number;

  /**
   * The devices contained in this rack.
   */
  public devices?: Array<Device> = [];

  /**
   * The connections defined in this rack.
   */
  public connections?: Array<Connection> = [];
}