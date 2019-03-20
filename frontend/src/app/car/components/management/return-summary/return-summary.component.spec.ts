import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnSummaryComponent } from './return-summary.component';

describe('ProductCardComponent', () => {
  let component: ReturnSummaryComponent;
  let fixture: ComponentFixture<ReturnSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
