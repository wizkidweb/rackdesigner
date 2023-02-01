export abstract class ApiService<Schema> {
  public abstract find(id: number): Schema;
  public abstract get(): Array<Schema>;
}
