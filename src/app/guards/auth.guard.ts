import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthorisationService } from '../services/authorisation.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthorisationService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {

      if (this.authService.isLoggedIn()) {
        resolve(true);
      } else {
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/authorisation/signin'], { queryParams: { returnUrl: state.url } });
        reject(false);
      }

    });

  }
}
