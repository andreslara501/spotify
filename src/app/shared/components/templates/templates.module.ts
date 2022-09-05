import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from '../organisms/organisms.module';
import { TcontentloginComponent } from './login/shared/tcontentlogin/tcontentlogin.component';
import { TsigninComponent } from './login/tsignin/tsignin.component';
import { TtokenComponent } from './login/ttoken/ttoken.component';
import { TasideComponent } from './application/taside/taside.component';
import { TplayerComponent } from './application/tplayer/tplayer.component';
import { TcontentComponent } from './application/shared/tcontent/tcontent.component';
import { ThomeComponent } from './application/thome/thome.component';


@NgModule({
  declarations: [
    TcontentloginComponent,
    TsigninComponent,
    TtokenComponent,
    TasideComponent,
    TplayerComponent,
    TcontentComponent,
    ThomeComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule
  ],
  exports: [
    OrganismsModule,
    TcontentloginComponent,
    TsigninComponent,
    TtokenComponent,
    TasideComponent,
    TplayerComponent,
    TcontentComponent,
    ThomeComponent
  ]
})
export class TemplatesModule { }
