import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectPointsComponent } from './collect-points.component';

describe('ProductCardComponent', () => {
  let component: CollectPointsComponent;
  let fixture: ComponentFixture<CollectPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
