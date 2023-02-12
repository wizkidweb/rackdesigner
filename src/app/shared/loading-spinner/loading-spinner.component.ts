import { Component } from '@angular/core';
import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {
  public faSpinnerThird = faSpinnerThird;
}
