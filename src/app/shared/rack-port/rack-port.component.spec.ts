import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackPortComponent } from './rack-port.component';

describe('RackPortComponent', () => {
  let component: RackPortComponent;
  let fixture: ComponentFixture<RackPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RackPortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RackPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
