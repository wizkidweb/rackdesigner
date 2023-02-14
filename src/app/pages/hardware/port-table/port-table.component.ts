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
  @Input()
  public hardwareId!: number;

  @Output()
  public change: EventEmitter<Array<Port>> = new EventEmitter<Array<Port>>();

  public ports: Array<Port> = [];

  public faTrash = faTrash;

  public loading = true;

  public portForm = this.fb.group({
    xPos: [0, [ Validators.required, Validators.min(0), Validators.max(32) ]],
    yPos: [0, [ Validators.required, Validators.min(0), Validators.max(1) ]],
    type: ['rj45'],
  });

  constructor(
    @Inject(PORT_SERVICE) private _portService: ModelServiceContract<Port>,
    private fb: FormBuilder,
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['hardwareId'] && this.hardwareId) {
      this.load();
    }
  }

  public load(): void {
    this._portService.getByIndex('hardware_id', this.hardwareId).pipe(
      tap(ports => this.ports = ports),
      tap(() => this.change.emit(this.ports)),
      finalize(() => this.loading = false),
    ).subscribe();
  }

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
