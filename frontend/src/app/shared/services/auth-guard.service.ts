import {Router} from '@angular/router';
import {CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {
  }

  canActivate(route, state: RouterStateSnapshot) {
    this.router.navigate(['/login']);
    return false;
  }

}
