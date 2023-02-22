import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrFormComponent } from './tr-form.component';

describe('TrFormComponent', () => {
  let component: TrFormComponent;
  let fixture: ComponentFixture<TrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
