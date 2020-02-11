import { Injectable } from '@angular/core'
import 'rxjs/Rx'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { CookieService } from 'ngx-cookie-service';


import { environment } from '../../../environments/environment';

import { ApiService } from './api.service';


@Injectable({providedIn:'root'})
export class ServiceAuth {

    constructor(private apiService: ApiService,private cookieService: CookieService) {}

    authenticate(user) {
        
        return this.apiService.post(environment.api + 'auth/signin', user)
        .pipe(map(data => data));
    }

    Register(user) {
        return this.apiService.post(environment.api + 'auth/sign-up', user)
        .pipe(map(data => data));
    }

    getToken(){
         return this.cookieService.get(environment.tokenKey);
    }
    
    getRole(){
        return this.cookieService.get("role");
    }
    
}