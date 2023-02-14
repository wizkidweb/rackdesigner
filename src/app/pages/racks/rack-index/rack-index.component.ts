import { Component, Inject, OnInit } from '@angular/core';
import { Rack } from 'src/app/models/rack.model';
import { Port } from 'src/app/models/port.model';
import { Hardware } from 'src/app/models/hardware.model';
import { ModelServiceContract, RACK_SERVICE } from 'src/app/data/contracts/model-service-contract.interface';
import { FormControl } from '@angular/forms';
import { faPenToSquare, faTrash } from '@fortawesome/pro-duotone-svg-icons';
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
   * The name of the rack to create.
   */
  public name = new FormControl('');

  /**
   * The size of the rack to create.
   */
  public size = new FormControl('');

  /**
   * Creates an instance of the rack index component.
   * @param _rackService A dynamically-injected copy of the rack service defined in the module.
   */
  constructor(@Inject(RACK_SERVICE) private _rackService: ModelServiceContract<Rack>) {}

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
    if (this.name.valid && this.size.valid) {
      this._rackService.store(Rack.create({
        name: this.name.value || '',
        size: parseInt(this.size.value || ''),
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
