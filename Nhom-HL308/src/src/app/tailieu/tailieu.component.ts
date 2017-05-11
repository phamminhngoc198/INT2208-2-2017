import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-tailieu',
  templateUrl: './tailieu.component.html',
  styleUrls: ['./tailieu.component.css']
})
export class TailieuComponent implements OnInit {
  tailieu: any;
  constructor(
    private af: AngularFire,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.firebaseService.getTailieu().subscribe(tailieu => {
      this.tailieu = tailieu;
    });
  }

}
