import { Model } from "../data/abstracts/model";

export class User extends Model {
  /**
   * The primary ID.
   */
  id?: number;

  /**
   * The user's name.
   */
  name!: string;

  /**
   * The user's email.
   */
  email!: string;
}