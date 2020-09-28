import { ActivatedRoute, Params } from '@angular/router';
import { DisheService } from './../services/dishes.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

    dish: Dish;
    // index : string ;

  constructor(private dishService: DisheService, private route: ActivatedRoute) {}

  ngOnInit() {
    let id: string = this.route.snapshot.params["id"];
    console.log("DishDetailComponent -> ngOnInit -> id", id)
    this.dish = this.dishService.getDish(id);
    console.log("DishDetailComponent -> ngOnInit -> this.dish", this.dish)
    // this.dish = this.route.snapshot.params
    // this.route.params.subscribe(
    //   (param: Params) => {
    //   // console.log("DishDetailComponent -> ngOnInit -> param----------------------------------", typeof(param.id))
    //     this.dish = this.dishService.getDish(param.id);
    //     console.log("dish =>  ", this.dish)
    //   }
    // )
  }


}
