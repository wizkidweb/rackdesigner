type ThisConstructor<T extends { prototype: unknown } = { prototype: unknown }> = T;
type This<T extends ThisConstructor> = T['prototype'];

export class Model {
  public static create<T extends ThisConstructor<typeof Model>>(
    this: T,
    input: { [K in keyof This<T>]: This<T>[K] },
  ): This<T> {
    return Object.assign(new this(), input);
  }
}