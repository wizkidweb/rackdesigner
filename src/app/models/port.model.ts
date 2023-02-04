import { Model } from "../abstracts/model";
import { Hardware } from "./hardware.model";

export class Port extends Model {
  public id!: number;
  public type!: string;
  public xPos!: number;
  public yPos!: number;
  public output?: number;
}