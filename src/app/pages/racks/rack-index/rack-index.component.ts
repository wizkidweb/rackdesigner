import { Component, OnInit } from '@angular/core';
import { Rack } from 'src/app/models/rack.model';
import { RackService } from 'src/app/services/model/rack.service';

@Component({
  selector: 'app-rack-index',
  templateUrl: './rack-index.component.html',
  styleUrls: ['./rack-index.component.scss']
})
export class RackIndexComponent implements OnInit {
  public racks: Array<Rack> = [];

  constructor(private _rackService: RackService) {}

  public ngOnInit(): void {
    this.racks = this._rackService.get();
  }
}
