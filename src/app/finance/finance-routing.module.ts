import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeOfTheMonthComponent } from './income-of-the-month/income-of-the-month.component';
import { StudentsWithDebtsComponent } from './students-with-debts/students-with-debts.component';

const routes: Routes = [
  { path: 'income', component: IncomeOfTheMonthComponent },
  { path: 'debts', component: StudentsWithDebtsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'income' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceRoutingModule {}
