import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { OSigninComponent } from './login/osignin/osignin.component';
import { OcardsComponent } from './content/ocards/ocards.component';
import { OcardssectionsComponent } from './content/ocardssections/ocardssections.component';


@NgModule({
  declarations: [
    OSigninComponent,
    OcardsComponent,
    OcardssectionsComponent,
  ],
  imports: [
    CommonModule,
    MoleculesModule
  ],
  exports: [
    MoleculesModule,
    OSigninComponent,
    OcardsComponent,
    OcardssectionsComponent,
  ]
})
export class OrganismsModule { }
