import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../../../shared/models/user.model';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'management-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  isUpdating: boolean = false;
  users: Array<User>;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
  }

  onUpdateClicked(user: User) {
    this.userService.updateUser(user);

    this.isUpdating = !this.isUpdating;
  }

}
