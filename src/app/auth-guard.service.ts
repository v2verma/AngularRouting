import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Rx';
import { CanActivateChild, RouterStateSnapshot } from '@angular/router/src';
import { ActivatedRouteSnapshot } from '@angular/router/public_api';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                    }
                }
            );
    }

    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.canActivate(route, state);
    }
}
