import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-xemdethi',
  templateUrl: './xemdethi.component.html'
})
export class XemdethiComponent implements OnInit {
  id: any;
  deth: any;
  quest: any;
  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getDethiDetails(this.id).subscribe(deth => {
      this.deth = deth;
    });
    this.firebaseService.getQuestions().subscribe(quest => {
      this.quest = quest;
    });
  }

}
