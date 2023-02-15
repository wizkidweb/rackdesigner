import { Component, Inject, OnInit } from '@angular/core';
import { Rack } from 'src/app/models/rack.model';
import { ModelServiceContract, RACK_SERVICE } from 'src/app/data/contracts/model-service-contract.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';
import { finalize, tap } from 'rxjs';

@Component({
  selector: 'app-rack-index',
  templateUrl: './rack-index.component.html',
  styleUrls: ['./rack-index.component.scss']
})
export class RackIndexComponent implements OnInit {
  /**
   * @see {@link faTrash}
   */
  public readonly faTrash = faTrash;

  /**
   * The racks to display in the table.
   */
  public racks: Array<Rack> = [];

  /**
   * If true, the loading spinner is shown.
   */
  public loading = true;

  /**
   * The form for creating a new rack.
   */
  public rackForm = this.fb.group({
    name: ['', Validators.required],
    size: ['', Validators.required],
  });

  /**
   * Creates an instance of the rack index component.
   * @param _rackService A dynamically-injected copy of the rack service defined in the module.
   * @param fb The form builder service.
   */
  constructor(
    @Inject(RACK_SERVICE) private _rackService: ModelServiceContract<Rack>,
    private fb: FormBuilder,
  ) {}

  /**
   * Loads rack data on component init.
   */
  public ngOnInit(): void {
    this.load();
  }

  /**
   * Clears existing rack data, and loads new data in its place.
   */
  public load() {
    this.loading = true;
    this.racks = [];

    this._rackService.get().pipe(
      tap(racks => this.racks = racks),
      finalize(() => this.loading = false),
    ).subscribe();
  }

  /**
   * Adds a new rack if the inputs are valid, then loads the latest rack data.
   */
  public add(): void {
    if (this.rackForm.valid) {
      this._rackService.store(Rack.create({
        name: this.rackForm.controls.name.value || '',
        size: parseInt(this.rackForm.controls.size.value || ''),
      })).subscribe(() => this.load());
    }
  }

  /**
   * Removes the rack with the given ID, then updates the current rack table.
   * @param id The rack ID to remove.
   */
  public remove(id: number): void {
    this._rackService.delete(id).subscribe(racks => this.racks = racks);
  }
}
