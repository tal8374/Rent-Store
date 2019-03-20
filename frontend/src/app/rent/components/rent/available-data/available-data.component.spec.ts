import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableDataComponent } from './available-data.component';

describe('ProductCardComponent', () => {
  let component: AvailableDataComponent;
  let fixture: ComponentFixture<AvailableDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
