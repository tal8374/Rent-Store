import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user.model';
import {UserService} from '../../../shared/services/user.service';
import {BackendResponse} from '../../../shared/models/backend-response.model';
import {Router} from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUser: User = new User();
  backendResponse: BackendResponse;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  onRegisterClicked(): void {
    const result = this.userService.register(this.registeredUser);

    result.subscribe(backendResponse => {
      this.backendResponse = backendResponse;

      if (this.isErrorExist()) {
        this.handleRegisterError();
      } else {
        this.handleRegisterSuccess();
      }
    });
  }

  private handleRegisterError(): void {

  }

  private handleRegisterSuccess(): void {
    this.router.navigate(['/login']);
  }

  private isErrorExist(): boolean {
    if (!this.backendResponse) {
      return false;
    }

    return 'backendErrorData' in this.backendResponse;
  }

  private getErrorMessage(): string {
    return 'User with the email is already exists';
  }
}
