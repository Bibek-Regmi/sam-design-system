import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  SdsMenuModule,
  SdsSearchModule,
  SdsObserversModule,
  SdsTruncateModule
} from '@gsa-sam/components';
import {
  SdsSubheaderComponent,
  SdsSubheaderActionsComponent,
  SdsSubheaderSearchComponent,
  SdsSubheaderButtonsComponent
} from './subheader.component';
import { SdsActionsMenuModule } from '../actions-menu/actions-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsMenuModule,
    SdsObserversModule,
    SdsSearchModule,
    SdsTruncateModule,
    SdsActionsMenuModule
  ],
  exports: [
    SdsSubheaderComponent,
    SdsSubheaderActionsComponent,
    SdsSubheaderSearchComponent,
    SdsSubheaderButtonsComponent
  ],
  declarations: [
    SdsSubheaderComponent,
    SdsSubheaderActionsComponent,
    SdsSubheaderSearchComponent,
    SdsSubheaderButtonsComponent
  ],
  providers: []
})
export class SdsSubheaderModule {}