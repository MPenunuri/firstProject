import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckGradesComponent } from './check-grades/check-grades.component';
import { ChooseSubjectComponent } from './choose-subject/choose-subject.component';
import { EvaluateTeachersComponent } from './evaluate-teachers/evaluate-teachers.component';
import { StudentsRoutingModule } from './students-routing.module';



@NgModule({
  declarations: [
    CheckGradesComponent,
    ChooseSubjectComponent,
    EvaluateTeachersComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
