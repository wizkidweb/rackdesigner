import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { finalize, tap } from 'rxjs';
import { HARDWARE_SERVICE, ModelServiceContract } from 'src/app/data/contracts/model-service-contract.interface';
import { Hardware } from 'src/app/models/hardware.model';

@Component({
  selector: 'app-hardware-index',
  templateUrl: './hardware-index.component.html',
  styleUrls: ['./hardware-index.component.scss']
})
export class HardwareIndexComponent implements OnInit {
  /**
   * @see {@link faTrash}
   */
  public readonly faTrash = faTrash;

  /**
   * @see {@link faPenToSquare}
   */
  public readonly faPenToSquare = faPenToSquare;

  /**
   * The loaded hardware list.
   */
  public hardware: Array<Hardware> = [];

  /**
   * If true, the loading spinner is displayed.
   */
  public loading = true;

  /**
   * The form group for creating new hardware.
   */
  public hardwareForm = this.fb.group({
    name: ['', Validators.required],
    size: ['', [Validators.required, Validators.min(1)]],
    maxDraw: [''],
    color: ['', Validators.pattern(/^#[0-9A-F]{6}$/i)],
  });

  /**
   * Creates an instance of hardware index component.
   * @param _hardwareService A dynamically-injected copy of the hardware service defined in the module.
   * @param fb The form builder service.
   */
  constructor(
    @Inject(HARDWARE_SERVICE) private _hardwareService: ModelServiceContract<Hardware>,
    private fb: FormBuilder,
  ) {}
  
  /**
   * Load hardware table when component is initialized.
   */
  public ngOnInit(): void {
    this.load();
  }

  /**
   * Clears the current hardware list, and loads new data into it.
   */
  public load() {
    this.loading = true;
    this.hardware = [];

    this._hardwareService.get().pipe(
      tap(hardware => this.hardware = hardware),
      finalize(() => this.loading = false),
    ).subscribe();
  }

  /**
   * Adds a new hardware entity if the form is valid.
   */
  public add(): void {
    if (this.hardwareForm.valid) {
      this._hardwareService.store(Hardware.create({
        name: this.hardwareForm.controls.name.value || '',
        size: parseInt(this.hardwareForm.controls.size.value || ''),
        maxDraw: parseInt(this.hardwareForm.controls.maxDraw.value || ''),
        color: this.hardwareForm.controls.color.value || '',
      })).subscribe(() => this.load());
    }
  }

  /**
   * Removes the hardware entity with the given ID.
   * @param id The primary ID of the hardware entity to remove.
   */
  public remove(id: number): void {
    this._hardwareService.delete(id).subscribe(hardware => this.hardware = hardware);
  }
}
