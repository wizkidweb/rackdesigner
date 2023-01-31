export abstract class ApiService<Schema> {
  public abstract find(): Schema;
  public abstract get(): Array<Schema>;
}
