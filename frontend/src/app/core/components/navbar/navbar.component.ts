import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {User} from '../../../shared/models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  user: User;
  userSubscription: Subscription;

  constructor(private userService: UserService) {
    // this.user = this.userService.getLoggedInUser();

    this.userSubscription = this.userService.userObservable.subscribe(user => {
      this.user = user;

    });
  }

  ngOnInit() {
  }

  logout(): void {
    this.userService.logout();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.userSubscription.unsubscribe();
  }
}
