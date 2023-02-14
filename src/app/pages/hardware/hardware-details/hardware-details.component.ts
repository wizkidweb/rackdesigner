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
  public readonly BS_COLORS = BootstrapColor;
  
  public hardware!: Hardware;
  public loading = true;
  public faTrash = faTrash;

  public hardwareForm = this.fb.group({
    size: [1, Validators.required],
    maxDraw: [],
  });

  public ports: Array<Port> = [];

  private _initSubscription!: Subscription;

  constructor(
    @Inject(HARDWARE_SERVICE) private _hardwareService: ModelServiceContract<Hardware>,
    private _route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  private _updateFormValues(): void {
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
}
