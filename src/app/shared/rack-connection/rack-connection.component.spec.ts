import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackConnectionComponent } from './rack-connection.component';

describe('RackConnectionComponent', () => {
  let component: RackConnectionComponent;
  let fixture: ComponentFixture<RackConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RackConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RackConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
