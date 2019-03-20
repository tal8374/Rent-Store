import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../../../../shared/models/user.model';
import {UserService} from '../../../../shared/services/user.service';

@Component({
  selector: 'management-users-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  sexOption = ['female', 'male'];
  @Input('user') user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  onUpdateClicked(user: User): void {
    this.userService.updateUser(user);
  }

  onRemoveClicked(user: User): void {
    this.userService.removeUser(user);
  }
}
