import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';
import { mergeMap, Observable, Subscription, tap } from 'rxjs';
import { ModelService } from 'src/app/data/abstracts/model.service';
import { HARDWARE_SERVICE, ModelServiceContract, PORT_SERVICE } from 'src/app/data/contracts/model-service-contract.interface';
import { BootstrapColor } from 'src/app/data/types/bootstrap.types';
import { Hardware } from 'src/app/models/hardware.model';
import { Port } from 'src/app/models/port.model';

@Component({
  selector: 'app-hardware-details',
  templateUrl: './hardware-details.component.html',
  styleUrls: ['./hardware-details.component.scss']
})
export class HardwareDetailsComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(HARDWARE_SERVICE) private _hardwareService: ModelServiceContract<Hardware>,
    @Inject(PORT_SERVICE) private _portService: ModelServiceContract<Port>,
    private _route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  public readonly BS_COLORS = BootstrapColor;
  
  public hardware!: Hardware;
  public loading = true;
  public faTrash = faTrash;

  public hardwareForm = this.fb.group({
    size: [1, Validators.required],
    ports: this.fb.group({
      xPos: [0, [Validators.min(0), Validators.max(32)]],
      yPos: [0, [Validators.min(0), Validators.max(1)]],
      type: ['rj45', Validators.required],
    })
  });

  public ports: Array<Port> = [];

  private _initSubscription!: Subscription;

  private _updateFormValues(): void {
    this.ports = this.hardware.ports || [];
    this.hardwareForm.controls.size.setValue(this.hardware.size);
  }

  public ngOnInit(): void {
    this._initSubscription = this._route.params.pipe(
      mergeMap((params: Params) => this.load(params['id'])),
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this._initSubscription?.unsubscribe();
  }

  public load(id: string): Observable<Hardware> {
    this.loading = true;

    return this._hardwareService.find(parseInt(id)).pipe(
      tap(hardware => this.hardware = hardware),
      tap(() => this._updateFormValues()),
      tap(() => this.loading = false),
    );
  }

  public addPort(): void {
    if (this.hardware?.id) {
      this._portService.store(Port.create({
        hardware_id: this.hardware.id,
        xPos: this.hardwareForm.get('ports.xPos')?.value || 0,
        yPos: this.hardwareForm.get('ports.yPos')?.value || 0,
        type: this.hardwareForm.get('ports.type')?.value || '',
      })).pipe(
        tap(port => this.ports.push(port)),
      ).subscribe();
    }
  }

  public removePort(id: number): void {
    this._portService.delete(id).pipe(
      tap(ports => this.ports = ports),
    ).subscribe();
  }
}
