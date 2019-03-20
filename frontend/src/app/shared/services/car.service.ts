import {Injectable} from '@angular/core';
import {Car} from '../models/car.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BackendResponse} from '../models/backend-response.model';
import {Observable, Subject} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<BackendResponse> {
    return this.http.get('http://localhost:3000/car').pipe(
      map(res => {

        return new BackendResponse(res);
      })
    );
  }

  buildQueryParams(source: Object): HttpParams {
    let target: HttpParams = new HttpParams();
    Object.keys(source).forEach((key: string) => {
      const value: string | number | boolean | Date = source[key];
      if ((typeof value !== 'undefined') && (value !== null)) {
        target = target.append(key, value.toString());
      }
    });
    return target;
  }

  getCar(car: Car): Observable<BackendResponse> {
    const url = 'http://localhost:3000/car/' + car._id;
    const params: HttpParams = this.buildQueryParams(car);

    return this.http.get(url, {params: params}).pipe(
      map(res => {

        return new BackendResponse(res);
      })
    );
  }

  getCarGearOptions(): Array<string> {
    return ['gear 1', 'gear2'];
  }

  getCarTypes(): Array<string> {
    return ['some role', 'some type2'];
  }

  getManufacturers(): Array<string> {
    return ['car Manufacturer1', 'car Manufacturer 2'];
  }

  getDailyRentCost(car: Car): number {
    return 31231.1231;
  }

  getLateReturnCost(car: Car): number {
    return 312.312;
  }

  getAvailableOptions(): Array<string> {
    return ['true', 'false'];
  }

  getProperOptions(): Array<string> {
    return ['true', 'false'];
  }

  updateCar(car: Car): void {

  }

  updateType(): void {

  }

  createNewCarType(carType: string): void {

  }
}
