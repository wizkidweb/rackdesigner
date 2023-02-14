import { ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';
import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {
  /**
   * @see {@link faSpinnerThird}
   */
  public readonly faSpinnerThird = faSpinnerThird;

  /**
   * If true, the spinner is fixed to the center of the screen.
   */
  @HostBinding('class.fixed')
  @Input()
  public fixed: boolean = false;
}
