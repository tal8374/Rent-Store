import {Car} from './car.model';

export class Cars {
  cars?: Array<Car>;

  constructor(init?: object) {
    this.cars = [];

    for (let key in init) {
      if (init.hasOwnProperty(key)) {
        this.cars.push(new Car(init[key]))
      }
    }
  }
}
