import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackHardwareComponent } from './rack-hardware.component';

describe('RackHardwareComponent', () => {
  let component: RackHardwareComponent;
  let fixture: ComponentFixture<RackHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RackHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RackHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
