import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {SearchCar} from '../models/search-car.model';


@Injectable()
export class SearchDataShareService {

  private messageSource = new BehaviorSubject(new SearchCar());
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(searchData: SearchCar) {
    this.messageSource.next(searchData)
  }

}
