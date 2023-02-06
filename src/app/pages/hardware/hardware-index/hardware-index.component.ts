import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';
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

  public name = new FormControl('');
  public size = new FormControl('');
  public maxDraw = new FormControl('');
  public color = new FormControl('');

  public faTrash = faTrash;

  public ngOnInit(): void {
    this.load();
  }

  public load() {
    this._hardwareService.get().subscribe(hardware => this.hardware = hardware);
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
