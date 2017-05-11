import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { FirebaseService } from '../services/firebase.service';
@Component ({
    selector: 'my-lambai',
    templateUrl: './lambai.component.html',
    styleUrls: ['./lambai.component.css']
})
export class LambaiComponent implements OnInit {
    id: any;
    deth: any;
    quest: any;
    private score: number;
    private scores: number;
    private count: number;
    da = false;
    private shows = false;
    private show = true;
    xacnhan = true;
    lambai = false;
    public timer: any;
    public h: number;
    public m: number;
    public s: number;
    constructor(
      private location: Location,
      private route: ActivatedRoute,
      private router: Router,
      private af: AngularFire,
      private firebaseService: FirebaseService,
    ) { 
    }
  getClick1() {
    this.show = false;
    this.shows = true;
  }
  getClick2() {
    this.xacnhan = false;
    this.lambai = true;
  }
  getClick3() {
    this.da = true;
    this.shows = false;
  }
  ngOnInit(): void {
    this.score = 0;
    this.count = 0;
    this.scores = 0;
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getDethiDetails(this.id).subscribe(deth => {
      this.deth = deth;
    });
    this.firebaseService.getQuestions().subscribe(quest => {
      this.quest = quest;
    });
  }
  check(b: string, a: string) {
      b = a;
      let c = [];
        for (let i = 0; i < this.quest.length; i ++){
          c[i] = 0;
          if(a == this.quest[i].answer){
            c[i] =1;
            this.score+= c[i];
          }
        }
	}
  gotoDethitest() {
      let link = ['/dethitest'];
      this.router.navigate(link);
    }
  gotoDethi() {
    let link = ['/dethi'];
    this.router.navigate(link)
  }
  start() {
    this.h = 1;
    this.m = 0;
    this.s = 0;
     window.clearInterval(this.timer);
     this.timer = setInterval(() => {
       this.s--;
       if (this.s === -1){
					this.m -= 1;
					this.s = 59;
				}
				if (this.m === -1){
					this.h -= 1;
					this.m = 59;
				}
       if(this.h === -1) {
            window.clearInterval(this.timer);
            this.startFilling();
            this.getClick1();
          }
     }, 1000);
}

  startFilling() {
    console.log(true);
  }
}