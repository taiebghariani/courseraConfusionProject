import { LeaderService } from './../services/leader.service';
import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders:Leader[] ;

  constructor (private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.leaders = this.leaderService.getLeaders();
    console.log("AboutComponent -> ngOnInit -> this.leaders", this.leaders)
  }

}
