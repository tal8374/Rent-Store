import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCarComponent } from './search-car.component';

describe('ProductCardComponent', () => {
  let component: SearchCarComponent;
  let fixture: ComponentFixture<SearchCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
