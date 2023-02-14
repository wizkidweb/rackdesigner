import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortComponent } from './port.component';

describe('RackPortComponent', () => {
  let component: PortComponent;
  let fixture: ComponentFixture<PortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
