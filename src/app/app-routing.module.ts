import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsigninComponent } from './pages/login/psignin/psignin.component';
import { TokenComponent } from './pages/login/token/token.component';
import { HomeComponent } from './pages/application/home/home.component';
import { TokenErrorComponent } from './pages/application/token-error/token-error.component';

const routes: Routes = [
  { path: 'signin', component: PsigninComponent,  pathMatch: 'full'},
  { path: 'token', component: TokenComponent,  pathMatch: 'full'},
  { path: 'home', component: HomeComponent,  pathMatch: 'full'},
  { path: 'tokenError', component: TokenErrorComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
