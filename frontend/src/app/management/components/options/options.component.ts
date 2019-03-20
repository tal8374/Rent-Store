import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'management-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  @Output() onChangeCategoryEvent: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onCarsTypeClicked() {
    this.router.navigate(['/management-area/cars-role']);
  }

  onUsersClick() {
    this.router.navigate(['/management-area/users']);
  }

  onOrdersClicked() {
    this.router.navigate(['/management-area/orders']);
  }

  onCarsClicked() {
    this.router.navigate(['/management-area/cars']);
  }
}
