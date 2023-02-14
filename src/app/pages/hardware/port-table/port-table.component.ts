import { Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';
import { finalize, tap } from 'rxjs';
import { ModelServiceContract, PORT_SERVICE } from 'src/app/data/contracts/model-service-contract.interface';
import { Port, PortType } from 'src/app/models/port.model';

@Component({
  selector: 'app-port-table',
  templateUrl: './port-table.component.html',
  styleUrls: ['./port-table.component.scss']
})
export class PortTableComponent implements OnChanges {
  /**
   * @see {@link faTrash}
   */
  public readonly faTrash = faTrash;

  /**
   * The hardware ID to query the ports from.
   */
  @Input()
  public hardwareId!: number;

  /**
   * When the port list changes, this is emitted.
   */
  @Output()
  public change: EventEmitter<Array<Port>> = new EventEmitter<Array<Port>>();

  /**
   * The ports to display in the table.
   */
  public ports: Array<Port> = [];

  /**
   * When true, the loading spinner is displayed.
   */
  public loading = true;

  /**
   * The form group for creating a new port.
   */
  public portForm = this.fb.group({
    xPos: [0, [ Validators.required, Validators.min(0), Validators.max(32) ]],
    yPos: [0, [ Validators.required, Validators.min(0), Validators.max(1) ]],
    type: ['rj45'],
  });

  /**
   * Creates an instance of port table component.
   * @param _portService A dynamically-injected copy of the port service defined in the module.
   * @param fb The form builder service.
   */
  constructor(
    @Inject(PORT_SERVICE) private _portService: ModelServiceContract<Port>,
    private fb: FormBuilder,
  ) {}

  /**
   * When {@link hardwareId} is changed and is still valid, load new port data.
   * @param changes The property change data.
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['hardwareId'] && this.hardwareId) {
      this.load();
    }
  }

  /**
   * Loads new port data from the given {@link hardwareId}, and emits those changes.
   * @see {@link change}
   */
  public load(): void {
    this._portService.getByIndex('hardware_id', this.hardwareId).pipe(
      tap(ports => this.ports = ports),
      tap(() => this.change.emit(this.ports)),
      finalize(() => this.loading = false),
    ).subscribe();
  }

  /**
   * If the form is valid, adds a new port, then emits the changes.
   * @see {@link change}
   */
  public addPort(): void {
    if (this.portForm.valid) {
      this.loading = true;

      this._portService.store(Port.create({
        hardware_id: this.hardwareId,
        xPos: this.portForm.controls.xPos.value || 0,
        yPos: this.portForm.controls.yPos.value || 0,
        type: this.portForm.controls.type.value as PortType,
      })).pipe(
        tap(port => this.ports.push(port)),
        tap(() => this.change.emit(this.ports)),
        finalize(() => this.loading = false),
      ).subscribe();
    }
  }

  /**
   * Removes the port with the given ID, if valid, then emits the changes.
   * @param id The port ID to remove.
   * @see {@link change}
   */
  public removePort(id?: number): void {
    if (id) {
      this.loading = true;
      
      this._portService.delete(id).pipe(
        tap(ports => this.ports = ports),
        tap(() => this.change.emit(this.ports)),
        finalize(() => this.loading = false),
      ).subscribe();
    }
  }
}
