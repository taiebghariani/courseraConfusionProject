import { Dish } from './../shared/dish';
import { Injectable } from '@angular/core';
import { DISHES } from "../shared/dishes";


@Injectable({
  providedIn: 'root'
})
export class DisheService {
  DISHES: Dish [];


  getDishes(){
    return DISHES  ;
  }

  getDish(id : string) {
    return DISHES.filter(
      (dish : Dish) => { dish.id === id}
    );
  }

  getFeaturedDish() : Dish {
    // console.log(DISHES[0].featured)
    return DISHES.filter(
      (dish: Dish) => dish.featured // === true
      )[0];
  }

  constructor() { }
}
