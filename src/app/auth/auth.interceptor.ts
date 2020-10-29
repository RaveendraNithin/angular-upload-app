import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthorisationService } from '../services/authorisation.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public auth: AuthorisationService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const passed_urls = [
            'https://serene-hollows-11661.herokuapp.com/api/v1/upload',
          ];

          if (this.auth.isLoggedIn() && (passed_urls.findIndex(x => request.url.indexOf(x) > -1) != -1)) {
            request = request.clone({
              setHeaders: {
                Authorization: this.auth.getToken(),
              }
            });
          }

          return next.handle(request);

    }
}
