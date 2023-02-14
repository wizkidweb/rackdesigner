import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortTableComponent } from './port-table.component';

describe('PortTableComponent', () => {
  let component: PortTableComponent;
  let fixture: ComponentFixture<PortTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
