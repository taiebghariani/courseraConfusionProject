import { LeaderService } from './../services/leader.service';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DisheService } from '../services/dishes.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish :Dish;
  promotion: Promotion ;
  leader: Leader;

  constructor(private dishservice: DisheService,
              private promotionservice: PromotionService,
              private leaderService: LeaderService) { }

  ngOnInit() {

    this.dish = this.dishservice.getFeaturedDish();
    // console.log("HomeComponent -> ngOnInit -> this.dish",  this.dishservice.getFeaturedDish())
    // console.log("HomeComponent -> ngOnInit -> this.dish", this.dish)
    this.promotion = this.promotionservice.getFeaturedPromotion();
    // console.log("HomeComponent -> ngOnInit -> this.promotion", this.promotion)
    this.leader = this.leaderService.getFeaturedLeader();
  }

}
