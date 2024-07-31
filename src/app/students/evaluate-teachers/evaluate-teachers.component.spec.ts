import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateTeachersComponent } from './evaluate-teachers.component';

describe('EvaluateTeachersComponent', () => {
  let component: EvaluateTeachersComponent;
  let fixture: ComponentFixture<EvaluateTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluateTeachersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluateTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
