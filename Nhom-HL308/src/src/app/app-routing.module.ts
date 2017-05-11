import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent }   from './menu/menu.component';
import { DethiComponent }      from './dethi/dethi.component';
import { LambaiComponent }  from './lambai/lambai.component';
import { XemdethiComponent } from './xemdethi/xemdethi.component';
import { DethitestComponent } from './dethitest/dethitest.component';
import { HomeComponent } from './home/home.component';
import { TailieuComponent } from './tailieu/tailieu.component';
import { DiendanComponent } from './diendan/diendan.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dethi',  component: DethiComponent },
  { path: 'dethitest',     component: DethitestComponent },
  { path: 'xemdethi/:id', component: XemdethiComponent },
  { path: 'lambai/:id', component: LambaiComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tailieu', component: TailieuComponent },
  { path: 'diendan', component: DiendanComponent },
  { path: 'gioithieu', component: GioithieuComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
