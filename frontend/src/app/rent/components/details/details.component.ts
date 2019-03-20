import {Component, Input} from '@angular/core';
import {CarService} from '../../../shared/services/car.service';
import {Car} from '../../../shared/models/car.model';
import {ActivatedRoute} from '@angular/router';
import {BackendResponse} from '../../../shared/models/backend-response.model';
import {Cars} from '../../../shared/models/cars.model';
import {BranchService} from '../../../shared/services/branch.service';
import {Branch} from '../../../shared/models/branch.model';

@Component({
  selector: 'car-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  car: Car;
  branch: Branch;

  constructor(private carService: CarService, private activeRoute: ActivatedRoute,
              private branchService: BranchService) {
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

        this.branchService.getBranches({carId: carId}).subscribe(backendResponse => {
          if (this.isErrorExist()) {
            this.handleGetBranchError(backendResponse);
          } else {
            this.handleGetBranchSuccess(backendResponse);
          }
        });


      });
  }

  getDailyRentCost(): number {
    return this.carService.getDailyRentCost(this.car);
  }

  getLateReturnCost(): number {
    return this.carService.getLateReturnCost(this.car);
  }

  private isErrorExist() {
    return false;
  }

  private handleGetCarsError(backendResponse: BackendResponse) {

  }

  private handleGetCarsSuccess(backendResponse: BackendResponse) {
    this.car = new Car(backendResponse.responseData);
  }

  private handleGetBranchSuccess(backendResponse: BackendResponse)
  {
    const arr: Array<any> = backendResponse.responseData;
    this.branch = new Branch(arr[0]);
  }

  private handleGetBranchError(backendResponse: BackendResponse) {
  }
}
