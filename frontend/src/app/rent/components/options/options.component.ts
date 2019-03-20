import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'rent-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  @Output() onChangeCategoryEvent: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onDetailsClick() {
    this.activeRoute.paramMap
      .subscribe(params => {
        const carId = params.get('carId');

        this.router.navigate(['/details', carId]);
      });
  }

  onRentClick() {
    this.activeRoute.paramMap
      .subscribe(params => {
        const carId = params.get('carId');

        this.router.navigate(['/rent', carId]);
      });
  }

  onCollectPoints() {
    this.activeRoute.paramMap
      .subscribe(params => {
        const carId = params.get('carId');

        this.router.navigate(['/collection-points', carId]);
      });
  }
}
