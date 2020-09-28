import { LEADERS } from './../shared/leaders';
import { Leader } from '../shared/leader'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  LEADERS: Leader [] ;
  constructor() {

  }
  getLeaders() {
    return LEADERS ;
  }
  getFeaturedLeader(){
    return LEADERS.filter(
      (leader) => leader.featured
    )[0]
  }
}
