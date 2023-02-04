import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Connection } from 'src/app/models/connection.model';

@Component({
  selector: 'app-rack-connection',
  templateUrl: './rack-connection.component.html',
  styleUrls: ['./rack-connection.component.scss']
})
export class RackConnectionComponent implements AfterViewInit {
  @Input()
  public connection!: Connection;

  @ViewChild('connectionCanvas', { static: false })
  public connectionCanvas!: ElementRef<HTMLCanvasElement>;

  public context!: CanvasRenderingContext2D | null;

  public ngAfterViewInit(): void {
    this.context = this.connectionCanvas.nativeElement.getContext('2d');
    this.render();
  }

  public clear() {
    this.context?.clearRect(
      0,
      0,
      this.connectionCanvas.nativeElement?.width,
      this.connectionCanvas.nativeElement?.height
    );
  }

  public render() {
    this.clear();
    this.context?.beginPath();
    this.context?.moveTo(0, 0);
    this.context?.bezierCurveTo(20, 100, 200, 100, 200, 20);
    this.context?.stroke();
  }
}
