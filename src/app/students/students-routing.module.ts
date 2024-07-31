import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckGradesComponent } from './check-grades/check-grades.component';
import { EvaluateTeachersComponent } from './evaluate-teachers/evaluate-teachers.component';
import { ChooseSubjectComponent } from './choose-subject/choose-subject.component';

const routes: Routes = [
  { path: 'check-grades', component: CheckGradesComponent },
  { path: 'choose-subject', component: ChooseSubjectComponent },
  { path: 'evaluate-teacher', component: EvaluateTeachersComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'check-grades' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
