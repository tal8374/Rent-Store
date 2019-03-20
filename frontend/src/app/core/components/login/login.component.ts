import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {User} from '../../../shared/models/user.model';
import {BackendResponse} from '../../../shared/models/backend-response.model';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetail: User = new User();
  backendResponse: BackendResponse;
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  onLoginClicked(): void {
    const result = this.userService.login(this.loginDetail)

    result.subscribe(backendResponse => {
      this.backendResponse = backendResponse;

      if (this.isErrorExist()) {
        this.handleLoginError();
      } else if(this.isUserExists()) {
        this.handleLoginSuccess();
      } else {
        this.handleUserIsNotCorrect();
      }
    });
  }

  private isErrorExist(): boolean {
    return this.errorMessage !== null && this.errorMessage !== undefined;
  }

  private handleLoginError(): void {
  }

  private handleLoginSuccess(): void {
    this.router.navigate(['/']);
  }

  private isUserExists(): boolean {
    const loggedInUser = new User(this.backendResponse.responseData);

    return 'email' in loggedInUser;
  }

  private addErrorMessage() {
    this.errorMessage = 'Email or Password is not correct.'
  }

  private handleUserIsNotCorrect() {
    this.addErrorMessage();
  }
}
