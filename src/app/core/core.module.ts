import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IntroComponent } from './components/intro/intro.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';

import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    IntroComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    IntroComponent,
    HeaderComponent,
    SidenavListComponent
  ]
})
export class CoreModule { }
