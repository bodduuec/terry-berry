import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './core/components/intro/intro.component';

const routes: Routes = [{
  path: '',
  component: IntroComponent
}, {
  path: 'about-me',
  loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
