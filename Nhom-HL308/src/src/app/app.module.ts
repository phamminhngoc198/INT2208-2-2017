import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';

import { AppComponent }  from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { DethiComponent } from './dethi/dethi.component';
import { LambaiComponent } from './lambai/lambai.component';
import { FirebaseService } from './services/firebase.service';
import { XemdethiComponent } from './xemdethi/xemdethi.component';
import { DethitestComponent } from './dethitest/dethitest.component';
import { HomeComponent } from './home/home.component';
import { TailieuComponent } from './tailieu/tailieu.component';
import { DiendanComponent } from './diendan/diendan.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDFI92A2vRB4psq7tFg0VMtlsoiQ703rKk",
    authDomain: "de-thi-vat-ly.firebaseapp.com",
    databaseURL: "https://de-thi-vat-ly.firebaseio.com",
    projectId: "de-thi-vat-ly",
    storageBucket: "de-thi-vat-ly.appspot.com",
    messagingSenderId: "232037892198"
}
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  declarations: [ AppComponent, 
                  MenuComponent, 
                  FooterComponent,
                  DethiComponent,
                  LambaiComponent,
                  XemdethiComponent,
                  DethitestComponent,
                  HomeComponent,
                  TailieuComponent,
                  DiendanComponent,
                  GioithieuComponent
  ],
  providers: [FirebaseService],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
