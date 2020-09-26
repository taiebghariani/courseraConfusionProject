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

  constructor() { }
}
