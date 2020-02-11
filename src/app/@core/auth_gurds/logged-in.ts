import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {ServiceAuth} from '../services/app.auth-service';


@Injectable({ providedIn: 'root' })
export class LoggedIn implements CanActivate {

  constructor(private router: Router,private serviceAuth:ServiceAuth) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(this.serviceAuth.getToken()){
        return true;
    }

    this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url }});
    return false;

  }
}