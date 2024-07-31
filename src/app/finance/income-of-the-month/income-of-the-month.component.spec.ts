import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeOfTheMonthComponent } from './income-of-the-month.component';

describe('IncomeOfTheMonthComponent', () => {
  let component: IncomeOfTheMonthComponent;
  let fixture: ComponentFixture<IncomeOfTheMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomeOfTheMonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeOfTheMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
