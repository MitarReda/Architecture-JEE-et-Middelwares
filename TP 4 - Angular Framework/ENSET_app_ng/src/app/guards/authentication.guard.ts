import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AppStateService} from "../services/app-state.service";

@Injectable({
  providedIn:'root'
})

export class AuthenticationGuard  {

  constructor(private appState:AppStateService,private route:Router) {
  }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean|UrlTree{
    if(this.appState.authState.isAuthenticated){
      return true;
    }else{
      this.route.navigateByUrl("/login");
      return false;
    }
  }
}
