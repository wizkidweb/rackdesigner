import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { BootstrapColor } from 'src/app/data/types/bootstrap.types';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  public onClose!: Subject<boolean>;

  public message!: string;

  public title!: string;

  public yesColor: BootstrapColor = BootstrapColor.primary;

  public yesLabel: string = 'Yes';

  public noColor: BootstrapColor = BootstrapColor.secondary;

  public noLabel: string = 'No';

  constructor(private _bsModalRef: BsModalRef) {}

  public ngOnInit(): void {
    this.onClose = new Subject();
  }

  public onConfirm(): void {
    this.onClose.next(true);
    this._bsModalRef.hide();
  }

  public onCancel(): void {
    this.onClose.next(false);
    this._bsModalRef.hide();
  }
}
