import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  constructor(@Inject(HARDWARE_SERVICE) private _hardwareService: ModelServiceContract<Hardware>) {}

  public hardware: Array<Hardware> = [];

  public loading = true;

  public name = new FormControl('');
  public size = new FormControl('');
  public maxDraw = new FormControl('');
  public color = new FormControl('');

  public faTrash = faTrash;
  public faPenToSquare = faPenToSquare;

  public ngOnInit(): void {
    this.load();
  }

  public load() {
    this.loading = true;
    this.hardware = [];

    this._hardwareService.get().pipe(
      tap(hardware => this.hardware = hardware),
      finalize(() => this.loading = false),
    ).subscribe();
  }

  public add(): void {
    if (this.name.valid && this.size.valid && this.maxDraw.valid && this.color.valid) {
      this._hardwareService.store(Hardware.create({
        name: this.name.value || '',
        size: parseInt(this.size.value || ''),
        maxDraw: parseInt(this.maxDraw.value || ''),
        color: this.color.value || '',
      })).subscribe(() => this.load());
    }
  }

  public remove(id: number): void {
    this._hardwareService.delete(id).subscribe(hardware => this.hardware = hardware);
  }
}
