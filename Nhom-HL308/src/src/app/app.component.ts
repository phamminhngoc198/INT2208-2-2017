import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Question } from './question';

@Component({
  selector: 'app-root',
  template: `
    <app-menu></app-menu>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class AppComponent  { 
  title = 'Đề thi Vật Lý';
}
