import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOrderCardComponent } from './car-order-card.component';

describe('ProductCardComponent', () => {
  let component: CarOrderCardComponent;
  let fixture: ComponentFixture<CarOrderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOrderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
