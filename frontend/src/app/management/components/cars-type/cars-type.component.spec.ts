import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsTypeComponent } from './cars-type.component';

describe('ProductFilterComponent', () => {
  let component: CarsTypeComponent;
  let fixture: ComponentFixture<CarsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
