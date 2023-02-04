import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackPreviewComponent } from './rack-preview.component';

describe('RackPreviewComponent', () => {
  let component: RackPreviewComponent;
  let fixture: ComponentFixture<RackPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RackPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RackPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
