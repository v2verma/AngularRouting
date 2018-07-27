import { RouterStateSnapshot } from '@angular/router/src';
import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate } from '@angular/router/public_api';
import { Observable } from 'rxjs/internal/Rx';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivatGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                    return component.canDeactivate();
    }
}
