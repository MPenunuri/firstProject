import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectComponent } from './subject/subject.component';
import { GroupListComponent } from './group-list/group-list.component';

const routes: Routes = [
  { path: 'group', component: GroupComponent },
  { path: 'group/:id', component: GroupComponent },
  { path: 'group-list', component: GroupListComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'subject-list', component: SubjectListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'group' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
