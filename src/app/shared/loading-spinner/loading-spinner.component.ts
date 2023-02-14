import { ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';
import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {
  constructor(private cdRef: ChangeDetectorRef) {}

  @HostBinding('class.fixed')
  @Input()
  public fixed: boolean = false;

  public faSpinnerThird = faSpinnerThird;
}
