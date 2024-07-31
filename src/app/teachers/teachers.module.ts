import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { GroupComponent } from './group/group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { TeachersRoutingModule } from './teachers-routing.module';

@NgModule({
  declarations: [
    GroupComponent,
    GroupListComponent,
    SubjectComponent,
    SubjectListComponent,
  ],
  imports: [CommonModule, ComponentsModule, TeachersRoutingModule],
})
export class TeachersModule {}
