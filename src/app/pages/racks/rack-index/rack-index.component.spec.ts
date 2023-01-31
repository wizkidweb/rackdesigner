import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackIndexComponent } from './rack-index.component';

describe('RackIndexComponent', () => {
  let component: RackIndexComponent;
  let fixture: ComponentFixture<RackIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RackIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RackIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
