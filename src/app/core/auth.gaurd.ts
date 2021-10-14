import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot
} from '@angular/router';
@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(
    ) {
    }
    isUserLoggedIn(state?: RouterStateSnapshot) {
        return true;
    }
    canLoad(route: Route) {
        return true;
    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.isUserLoggedIn(state);
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
    }
}
