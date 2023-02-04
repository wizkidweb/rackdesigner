import { Model } from "../abstracts/model";
import { Connection } from "./connection.model";
import { Device } from "./device.model";

export class Rack extends Model {
  public id!: number;
  public name!: string;
  public size!: number;
  public devices?: Array<Device> = [];
  public connections?: Array<Connection> = [];
}