import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DisheService } from '../services/dishes.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish :Dish;
  promotion: Promotion ;

  constructor(private dishservice: DisheService,
              private promotionservice: PromotionService) { }

  ngOnInit() {

    this.dish = this.dishservice.getFeaturedDish();
    console.log("HomeComponent -> ngOnInit -> this.dish",  this.dishservice.getFeaturedDish())
    console.log("HomeComponent -> ngOnInit -> this.dish", this.dish)
    this.promotion = this.promotionservice.getFeaturedPromotion();
    console.log("HomeComponent -> ngOnInit -> this.promotion", this.promotion)
  }

}
