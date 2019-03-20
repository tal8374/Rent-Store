import {Cars} from './cars.model';
import {Car} from './car.model';

export class Branch {
  _id?: string;
  cars?: Cars;
  name?: string;
  location?: Location;


  constructor(init?: object) {
    if (!init) {
      return;
    }

    this.cars = new Cars(init['cars']);
    this.name = init['name'];


    // Object.assign(this, init)
  }

  getCars(): Cars {
    return this.cars;
  }
}
