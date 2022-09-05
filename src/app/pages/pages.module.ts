import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../shared/components/templates/templates.module';
import { PsigninComponent } from './login/psignin/psignin.component';
import { TokenComponent } from './login/token/token.component';
import { HomeComponent } from './application/home/home.component';
import { TokenErrorComponent } from './application/token-error/token-error.component';



@NgModule({
  declarations: [
    PsigninComponent,
    TokenComponent,
    HomeComponent,
    TokenErrorComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule,
  ],
  exports: [
    TemplatesModule,
    TokenComponent,
    HomeComponent,
    TokenErrorComponent
  ]
})
export class PagesModule { }
