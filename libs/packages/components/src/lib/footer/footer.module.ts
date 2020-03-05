import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsFooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsCollapseModule } from '../collapse/collapse.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, SdsCollapseModule, FontAwesomeModule
  ],
  declarations: [SdsFooterComponent],
  exports: [SdsFooterComponent]
})
export class SdsFooterModule { }
