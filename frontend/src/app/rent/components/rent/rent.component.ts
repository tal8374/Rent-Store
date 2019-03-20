import {Component, Input, OnInit} from '@angular/core';
import {RentForm} from '../../../shared/models/rent.form';
import {ActivatedRoute, Router} from '@angular/router';
import {RentService} from '../../../shared/services/rent.service';
import {CarService} from '../../../shared/services/car.service';
import {Car} from '../../../shared/models/car.model';
import {BackendResponse} from '../../../shared/models/backend-response.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'car-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  rentForm: RentForm = new RentForm();
  car: Car;

  constructor(private activeRoute: ActivatedRoute, private rentService: RentService,
              private router: Router, private carService: CarService) {
  }

  ngOnInit(): void {
    this.setCar();
  }

  setCar() {
    this.activeRoute.paramMap
      .subscribe(params => {
        const carId = params.get('carId');

        this.carService.getCar(new Car({_id: carId})).subscribe(backendResponse => {
          if (this.isErrorExist()) {
            this.handleGetCarsError(backendResponse);
          } else {
            this.handleGetCarsSuccess(backendResponse);
          }
        });
      });
  }

  private isErrorExist() {
    return false;
  }

  private handleGetCarsError(backendResponse: BackendResponse) {

  }

  private handleGetCarsSuccess(backendResponse: BackendResponse) {
    this.car = new Car(backendResponse.responseData);
  }

  onRentClicked() {
    console.log(this.areLegalDates())
    // this.rentService.createRent(this.car, this.rentForm);

    // this.router.navigate(['/success-rentForm', this.car._id]);
  }

  isAvailableForRent(): boolean {
    if(!this.car) {
      return false;
    }

    let unReturnedCars = this.car.rents.filter(rent => rent.actualReturnDate == null);

    return unReturnedCars.length === 0;
  }

  areLegalDates() {
     const beginningRentDate = this.rentForm.beginningRentDate;
     const endOfRentDate = this.rentForm.endOfRentDate;

    if(!beginningRentDate || !endOfRentDate) {
      return false;
    }


    return beginningRentDate < endOfRentDate;
  }
}
