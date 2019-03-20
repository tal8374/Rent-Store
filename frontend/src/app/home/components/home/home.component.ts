import {Component, OnInit} from '@angular/core';
import {CarService} from '../../../shared/services/car.service';
import {Cars} from '../../../shared/models/cars.model';
import {BackendResponse} from '../../../shared/models/backend-response.model';
import {BranchService} from '../../../shared/services/branch.service';
import {Branch} from '../../../shared/models/branch.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: Cars = new Cars();
  branch: Branch = new Branch();
  backendResponse: BackendResponse;

  constructor(private branchService: BranchService) {
  }

  ngOnInit() {
    this.branchService.getBranch(new Branch({_id: '5c908f19cd094f3dc0adfbeb'})).subscribe(backendResponse => {
      this.backendResponse = backendResponse;

      if (this.isErrorExist()) {
        this.handleGetCarsError();
      } else {
        this.handleGetCarsSuccess();
      }
    });
  }

  private isErrorExist(): boolean {
    return false;
  }

  private handleGetCarsError(): void {

  }

  private handleGetCarsSuccess(): void {
    this.branch = new Branch(this.backendResponse.responseData);
    this.cars = this.branch.getCars();
  }

}
