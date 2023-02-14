import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Connection } from 'src/app/models/connection.model';

@Component({
  selector: 'app-rack-connection',
  templateUrl: './rack-connection.component.html',
  styleUrls: ['./rack-connection.component.scss']
})
export class RackConnectionComponent implements AfterViewInit {
  /**
   * The connection to display./
   */
  @Input()
  public connection!: Connection;

  /**
   * The canvas with which to draw the connection line.
   */
  @ViewChild('connectionCanvas', { static: false })
  public connectionCanvas!: ElementRef<HTMLCanvasElement>;

  /**
   * The context used to draw the connection line.
   */
  public context!: CanvasRenderingContext2D | null;

  /**
   * Render the connection line after view is initialized.
   */
  public ngAfterViewInit(): void {
    this.context = this.connectionCanvas.nativeElement.getContext('2d');
    this.render();
  }

  /**
   * Clears the connection line.
   */
  public clear(): void {
    this.context?.clearRect(
      0,
      0,
      this.connectionCanvas.nativeElement?.width,
      this.connectionCanvas.nativeElement?.height
    );
  }

  /**
   * Renders the connection line.
   */
  public render(): void {
    this.clear();
    this.context?.beginPath();
    this.context?.moveTo(0, 0);
    this.context?.bezierCurveTo(20, 100, 200, 100, 200, 20);
    this.context?.stroke();
  }
}
