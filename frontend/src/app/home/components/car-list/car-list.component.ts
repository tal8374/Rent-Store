import {Component, OnInit} from '@angular/core';
import {Car} from '../../../shared/models/car.model';
import {CarService} from '../../../shared/services/car.service';
import {Cars} from '../../../shared/models/cars.model';
import {BackendResponse} from '../../../shared/models/backend-response.model';
import {Branch} from '../../../shared/models/branch.model';
import {BranchService} from '../../../shared/services/branch.service';

@Component({
  selector: 'home-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Cars = new Cars();
  branch: Branch = new Branch();

  constructor(private branchService: BranchService) {
  }


  ngOnInit() {
    this.branchService.getBranch(new Branch({_id: '5c90fe3e485a1935b4d231d0'})).subscribe(backendResponse => {
      if (this.isErrorExist(backendResponse)) {
        this.handleGetCarsError(backendResponse);
      } else {
        this.handleGetCarsSuccess(backendResponse);
      }
    });
  }

  private isErrorExist(backendResponse : BackendResponse) {
    return false;
  }

  private handleGetCarsError(backendResponse : BackendResponse) {

  }

  private handleGetCarsSuccess(backendResponse : BackendResponse): void {
    const arr: Array<any> =  backendResponse.responseData;

    this.branch = new Branch(backendResponse.responseData);
    this.cars = this.branch.getCars();
  }

}
