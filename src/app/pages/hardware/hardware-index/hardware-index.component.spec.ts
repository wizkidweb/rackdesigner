import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareIndexComponent } from './hardware-index.component';

describe('HardwareIndexComponent', () => {
  let component: HardwareIndexComponent;
  let fixture: ComponentFixture<HardwareIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
