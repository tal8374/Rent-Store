import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailCardComponent } from './car-detail-card.component';

describe('ProductCardComponent', () => {
  let component: CarDetailCardComponent;
  let fixture: ComponentFixture<CarDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
