import { Model } from "../data/abstracts/model";
import { Hardware } from "./hardware.model";

export class Device extends Model {
  public id!: number;
  public hardware!: Hardware;
}