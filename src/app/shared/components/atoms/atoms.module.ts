import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './visual/button/button.component';
import { ImageComponent } from './visual/image/image.component';
import { LinkbuttonComponent } from './visual/linkbutton/linkbutton.component';
import { LogoAnimatedComponent } from './animated/logo-animated/logo-animated.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ImageComponent,
    LinkbuttonComponent,
    LogoAnimatedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ImageComponent,
    LinkbuttonComponent,
    LogoAnimatedComponent
  ]
})
export class AtomsModule { }
