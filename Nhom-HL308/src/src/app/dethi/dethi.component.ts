import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-dethi',
  templateUrl: './dethi.component.html',
  styleUrls: ['./dethi.component.css']
})
export class DethiComponent implements OnInit {
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
