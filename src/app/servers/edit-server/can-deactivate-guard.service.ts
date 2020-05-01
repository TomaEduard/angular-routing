import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {
    
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

    canDeactivate(
        component: CanComponentDeactivate, 
        currentRoute: import("@angular/router").ActivatedRouteSnapshot,
        currentState: import("@angular/router").RouterStateSnapshot,
        nextState?: import("@angular/router").RouterStateSnapshot

    ): boolean | import("@angular/router").UrlTree | 
    Observable<boolean | import("@angular/router").UrlTree> | 
    Promise<boolean | import("@angular/router").UrlTree> {
        
        return component.canDeactivate();
    }
    
}