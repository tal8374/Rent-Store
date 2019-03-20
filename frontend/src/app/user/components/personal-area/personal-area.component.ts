import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {User} from '../../../shared/models/user.model';
import {Subscription} from 'rxjs';
import {BackendResponse} from '../../../shared/models/backend-response.model';

@Component({
  selector: 'user-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit, OnDestroy{

  user: User;
  userSubscription: Subscription;
  backendResponse: BackendResponse;
  isUpdating: boolean = false;

  constructor(private userService: UserService) {
    this.userSubscription = this.userService.userObservable.subscribe(user => {
      this.user = user;
    });

    if(!this.user) {
      this.userService.reloadUser();
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onUpdateClicked() {
    const result = this.userService.updateUser(this.user);

    result.subscribe(backendResponse => {

      this.isUpdating = !this.isUpdating;

      this.backendResponse = backendResponse;

      if (this.isErrorExist()) {
        this.handleRegisterError();
      } else {
        this.handleRegisterSuccess();
      }
    });

    this.isUpdating = !this.isUpdating;
  }

  private handleRegisterError(): void {

  }

  private handleRegisterSuccess(): void {
  }

  private isErrorExist(): boolean {
    if (!this.backendResponse) {
      return false;
    }

    return 'backendErrorData' in this.backendResponse;
  }

  toggleUpdatingState(): void {
    this.isUpdating = !this.isUpdating;
  }
}
