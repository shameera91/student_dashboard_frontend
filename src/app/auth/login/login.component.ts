import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NbLoginComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import {Router,ActivatedRoute} from '@angular/router';
import { ServiceAuth } from '../../@core/services/app.auth-service';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class NgxLoginComponent extends NbLoginComponent {
  
  user= {
    username:"",
    password:"",
  }

  returnUrl="/";

  constructor(
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private serviceAuth: ServiceAuth, 
    service: NbAuthService, 
    @Inject(NB_AUTH_OPTIONS) options:{},
     cd: ChangeDetectorRef, router: Router) {
    super(service, options, cd, router);
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'];
    });
  }


  login(){
     //wso2 im
    this.serviceAuth.authenticate(this.user).subscribe(response => {
      this.cookieService.set( environment.tokenKey, response.accessToken);
      this.cookieService.set( "role", response.userPrivilage);
      this.router.navigateByUrl(this.returnUrl);
    },err =>{ 
      console.log(err);
    })
    
  }
  

}
