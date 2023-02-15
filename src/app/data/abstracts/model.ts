import { Queried } from "../types/model.types";

type ThisConstructor<T extends { prototype: unknown } = { prototype: unknown }> = T;
type This<T extends ThisConstructor> = T['prototype'];
type ExcludeFunctionPropertyNames<T> = Pick<T, {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]>;
type IfEquals<X, Y, A, B> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? A : B;
type WritableKeysOf<T> = {
  [P in keyof T]: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P, never>
}[keyof T];
type WritablePart<T> = ExcludeFunctionPropertyNames<Pick<T, WritableKeysOf<T>>>;

export class Model {
  /**
   * Creates a new instance of this model.
   * @param this A reference to the `this` scope of the model.
   * @param input Includes all writable properties of the model. This does not allow defining readonly properties, getters, or methods.
   * @returns A newly-instantiated object of this model class.
   */
  public static create<T extends ThisConstructor<typeof Model>>(
    this: T,
    input: WritablePart<This<T>>,
  ): This<T> {
    return Object.assign(new this(), input);
  }

  /**
   * Creates a new queried instance of this model.
   * @param this A reference to the `this` scope of the model.
   * @param input Includes all writable properties of the model, including shared query model props.
   * @returns A newly-instantiated and queried object of this model class.
   */
  public static createQueried<T extends ThisConstructor<typeof Model>>(
    this: T,
    input: WritablePart<Queried<This<T>>>,
  ): Queried<This<T>> {
    return Object.assign(new this(), input) as Queried<This<T>>;
  }
}