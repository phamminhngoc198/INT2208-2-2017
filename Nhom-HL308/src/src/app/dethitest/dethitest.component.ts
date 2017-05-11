import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-dethitest',
  templateUrl: './dethitest.component.html',
  styleUrls: ['/dethitest.component.css']
})
export class DethitestComponent implements OnInit {
  dethi: any;
  constructor(
    private af: AngularFire,
    private firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
    this.firebaseService.getDethi().subscribe(dethi => {
      console.log(dethi);
      this.dethi = dethi;
    });
  }

}
