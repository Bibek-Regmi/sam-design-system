import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBasic } from './demos/basic/dialog-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { DialogBasicModule } from './demos/basic/dialog-basic.module';
import { FormlyDialogModule } from './demos/formly-modal/formly-modal.module';
import { FormlyDialog } from './demos/formly-modal/formly-modal.component';
import { DownloadComponent } from './demos/download/download.component';
import { DownloadModule } from './demos/download/download.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Modal Dialog',
    type: DialogBasic,
    code: require('!!raw-loader!./demos/basic/dialog-basic.component'),
    markup: require('!!raw-loader!./demos/basic/dialog-basic.component.html'),
    path: 'libs/documentation/src/lib/components/dialog/demos/basic'
  },
  formly: {
    title: 'Modal Dialog with Formly',
    type: FormlyDialog,
    code: require('!!raw-loader!./demos/formly-modal/formly-modal.component'),
    markup: require('!!raw-loader!./demos/formly-modal/formly-modal.component.html'),
    path: 'libs/documentation/src/lib/components/dialog/demos/formly-modal'
  },
  download: {
    title: 'Download Modal Dialog',
    type: DownloadComponent,
    code: require('!!raw-loader!./demos/download/download.component'),
    markup: require('!!raw-loader!./demos/download/download.component.html'),
    path: 'libs/documentation/src/lib/components/dialog/demos/download'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      items: [
        {
          pkg: 'components',
          type: 'components',
          name: 'SdsDialogContainerComponent'
        }
      ]
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    DialogBasicModule,
    FormlyDialogModule,
    DownloadModule
  ]
})
export class DialogModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('dialog', DEMOS);
  }
}
