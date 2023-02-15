import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { Rack } from 'src/app/models/rack.model';
import { ModelServiceContract, RACK_SERVICE } from 'src/app/data/contracts/model-service-contract.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { faDeleteLeft } from '@fortawesome/pro-duotone-svg-icons';
import { finalize, iif, Observable, of, tap } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { BootstrapColor } from 'src/app/data/types/bootstrap.types';
import { Queried } from 'src/app/data/types/model.types';

@Component({
  selector: 'app-rack-index',
  templateUrl: './rack-index.component.html',
  styleUrls: ['./rack-index.component.scss']
})
export class RackIndexComponent implements OnInit {
  /**
   * @see {@link faTrash}
   */
  public readonly faDeleteLeft = faDeleteLeft;

  /**
   * The racks to display in the table.
   */
  public racks: Array<Queried<Rack>> = [];

  /**
   * If true, the loading spinner is shown.
   */
  public loading = true;

  /**
   * The Angular Bootstrap modal reference.
   */
  public modalRef?: BsModalRef;

  /**
   * The form for creating a new rack.
   */
  public rackForm = this._fb.group({
    name: ['', Validators.required],
    size: ['', Validators.required],
  });

  /**
   * Creates an instance of the rack index component.
   * @param _rackService A dynamically-injected copy of the rack service defined in the module.
   * @param _fb The form builder service.
   */
  constructor(
    @Inject(RACK_SERVICE) private _rackService: ModelServiceContract<Rack>,
    private _fb: FormBuilder,
    private _modalService: BsModalService,
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
      })).pipe(
        tap(() => this.load()),
        tap(() => this.rackForm.reset()),
      ).subscribe();
    }
  }

  /**
   * Removes the rack with the given ID, then updates the current rack table.
   * @param id The rack ID to remove.
   */
  public remove(id: number): Observable<Array<Queried<Rack>>> {
    return this._rackService.delete(id);
  }

  public showRemoveConfirmation(rack: Queried<Rack>): void {
    this.modalRef = this._modalService.show(ConfirmModalComponent, { backdrop: 'static', keyboard: false });
    this.modalRef.content.title = 'Delete Rack';
    this.modalRef.content.message = `Are you sure you want to delete the rack titled "${rack.name}"?`;
    this.modalRef.content.yesLabel = 'Yes, Delete';
    this.modalRef.content.yesColor = BootstrapColor.danger;
    // this.modalRef.content.onClose.pipe(
    //   iif((result: boolean) => (result && rack.id), this._rackService.delete(rack.id), of()),
    // ).subscribe();

    this.modalRef.content.onClose.subscribe((result: boolean) => {
      if (result && rack.id) {
        this.remove(rack.id);
      }
    });
  }
}
