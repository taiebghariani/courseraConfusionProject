import { DisheService } from './../services/dishes.service';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DISHES } from '../shared/dishes';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[] //= [...DISHES];
  // selectedDish: Dish;

  constructor(private dishService: DisheService) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes() ;
  }
  // onSelect(dish: Dish) {
  //   this.router.navigate(['/dish-detail', dish.id])
  // }


}
