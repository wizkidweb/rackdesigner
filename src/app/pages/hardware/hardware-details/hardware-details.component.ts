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
  /**
   * @see {@link BootstrapColor}
   */
  public readonly BS_COLORS = BootstrapColor;

  /**
   * @see {@link faTrash}
   */
  public readonly faTrash = faTrash;
  
  /**
   * The currently loaded Hardware.
   */
  public hardware!: Hardware;

  /**
   * Shows the loading spinner if true.
   */
  public loading = true;

  /**
   * The form group for creating new hardware.
   */
  public hardwareForm = this.fb.group({
    size: [1, Validators.required],
    maxDraw: [],
  });

  /**
   * The ports to display in the hardware preview.
   */
  public ports: Array<Port> = [];

  /**
   * The subscription defined on component init.
   */
  private _initSubscription!: Subscription;

  /**
   * Creates an instance of hardware details component.
   * @param _hardwareService A dynamically-injected copy of the hardware service defined in the module.
   * @param _route Angular activated route service.
   * @param fb The form builder service.
   */
  constructor(
    @Inject(HARDWARE_SERVICE) private _hardwareService: ModelServiceContract<Hardware>,
    private _route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  /**
   * Updates the form values with loaded hardware data.
   */
  private _updateFormValues(): void {
    this.hardwareForm.controls.size.setValue(this.hardware.size);
  }

  /**
   * When the component is initialized, listen for route parameter changes, and load new data when that happens.
   */
  public ngOnInit(): void {
    this._initSubscription = this._route.params.pipe(
      mergeMap((params: Params) => this.load(params['id'])),
    ).subscribe();
  }

  /**
   * When the component is destroyed, unsubscribe from ongoing subscriptions to prevent memory leak.
   */
  public ngOnDestroy(): void {
    this._initSubscription?.unsubscribe();
  }

  /**
   * Loads hardware with the given ID.
   * @param id The hardware ID to load.
   * @returns An observable with the loaded hardware.
   */
  public load(id: string): Observable<Hardware> {
    this.loading = true;

    return this._hardwareService.find(parseInt(id)).pipe(
      tap(hardware => this.hardware = hardware),
      tap(() => this._updateFormValues()),
      tap(() => this.loading = false),
    );
  }
}
