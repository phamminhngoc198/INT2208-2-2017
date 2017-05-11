import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

import { Dethi } from '../dethi';
import { Question } from '../question';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [FirebaseService]
})
export class MenuComponent implements OnInit {
  title = "Ôn Luyện Vật Lý";
  error: any;
  show = false;
  shows = true;
  private use_displayName: String;
  private user_email: String;
  constructor(public firebaseService: FirebaseService, public af: AngularFire,private router: Router) {
    this.firebaseService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          this.use_displayName = '';
          this.user_email = '';
        } else{
          this.use_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
        }
      }
    );
  }
  ngOnInit() {
  }
  loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.shows = false;
        this.show = true;
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.shows = false;
        this.show = true;
      }).catch(
        (err) => {
        this.error = err;
      })
  }
  logout() {
    this.af.auth.logout().then(
      (success) => {
        this.shows = true;
        this.show = false;
      }
    );
  }
  gotoDetail(dethi: Dethi): void{
    let link = ['/xemdethi/'+ dethi.$key]
  }
}
