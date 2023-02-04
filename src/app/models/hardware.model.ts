import { Model } from "../abstracts/model";
import { Port } from "./port.model";

export class Hardware extends Model {
  public id!: number;
  public name!: string;
  public size!: number;
  public ports!: Array<Port>;
  public maxDraw?: number;
  public color?: string;
}