import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18NEXT_NAMESPACE, I18NextModule } from 'angular-i18next';
import { ValidationMessageModule } from 'angular-validation-message';
import { I18NextValidationMessageModule } from 'angular-validation-message-i18next';

import { ValidationModule } from '../../../lib/validation/ValidationModule';
import { RichFormComponent } from './rich-form.component';
import { RichFormFeatureRouterModule } from './RichFormFeatureRouterModule';


export const declarations = [
  RichFormComponent
];

export const providers = [
  FormBuilder,
  {
    provide: I18NEXT_NAMESPACE,
    useValue: ['not_existing_namespace', 'feature.rich_form']
  }
];

@NgModule({
  bootstrap: declarations,
  declarations: declarations,
  providers: providers,
  imports: [
    //core
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //feature
    RichFormFeatureRouterModule,

    //lib
    I18NextModule,
    ValidationModule,
    ValidationMessageModule,
    I18NextValidationMessageModule,
  ]
})
export class RichFormFeatureModule {}
