import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {ServiceAuth} from '../services/app.auth-service';


@Injectable({ providedIn: 'root' })
export class admin implements CanActivate {

  constructor(private router: Router,private serviceAuth:ServiceAuth) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.serviceAuth.getToken() && this.serviceAuth.getRole()=="ROLE_ADMIN"){
        return true;
    }

    this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url }});
    return false;

  }
}