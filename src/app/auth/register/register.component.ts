import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NbRegisterComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { ServiceAuth } from '../../@core/services/app.auth-service';


@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class NgxRegisterComponent extends NbRegisterComponent  {

  user= {
    fullName:"",
    email:"",
    password:"",
    confirmPassword:""
  }


  constructor(protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router,private serviceAuth: ServiceAuth) {
    super(service,options,cd,router);
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.serviceAuth.Register(this.user).subscribe(response => {
      
      this.router.navigateByUrl('/auth/login');
    },err =>{ 
      console.log(err);
    })
    
   
  }

  


}
