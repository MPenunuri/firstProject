import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { IncomeOfTheMonthComponent } from './income-of-the-month/income-of-the-month.component';
import { StudentsWithDebtsComponent } from './students-with-debts/students-with-debts.component';


@NgModule({
  declarations: [
    IncomeOfTheMonthComponent,
    StudentsWithDebtsComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
