import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCardComponent } from './my-card/my-card.component';
import { MyProgressBarComponent } from './my-progress-bar/my-progress-bar.component';
import { MyModalComponent } from './my-modal/my-modal.component';

@NgModule({
  declarations: [MyCardComponent, MyProgressBarComponent, MyModalComponent],
  exports: [MyCardComponent, MyProgressBarComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
