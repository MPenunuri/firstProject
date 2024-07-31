import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsWithDebtsComponent } from './students-with-debts.component';

describe('StudentsWithDebtsComponent', () => {
  let component: StudentsWithDebtsComponent;
  let fixture: ComponentFixture<StudentsWithDebtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsWithDebtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsWithDebtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
