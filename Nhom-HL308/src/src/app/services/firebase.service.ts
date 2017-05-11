import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Dethi } from '../dethi';
import { Question } from '../question';
import { Tailieu } from '../tailieu';
@Injectable()
export class FirebaseService {
  dethi: FirebaseListObservable<any[]>;
  deth: FirebaseObjectObservable<any[]>;
  questions: FirebaseListObservable<any[]>;
  tailieu: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire, private http: Http) {
    this.dethi = this.af.database.list('dethi') as FirebaseListObservable<Dethi[]>;
    this.questions = this.af.database.list('questions') as FirebaseListObservable<Question[]>;
    this.tailieu = this.af.database.list('tailieu') as FirebaseListObservable<Tailieu[]>;

   }
   search(term: string): Observable<Dethi[]> {
     return this.http
                .get(`xemdethi/?$key=${term}`)
                .map(response => response.json().data as Dethi[]);
   }
   loginWithGoogle() {
     return this.af.auth.login({
        provider: AuthProviders.Google,
        method: AuthMethods.Popup
     });
   }

   logout() {
     return this.af.auth.logout();
   }
  getDethi() {
    return this.dethi;
  }
  getDethiDetails(id) {
    this.deth = this.af.database.object('/dethi/' + id) as FirebaseObjectObservable<Dethi>
    return this.deth;
  }
  getQuestions() {
    return this.questions;
  }
  getTailieu() {
    return this.tailieu;
  }
}

