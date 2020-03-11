import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class ItemRouteActivator implements CanActivate{

    constructor(
        private dataService: DataService,
        private router: Router
    ){

    }     

    canActivate(route: ActivatedRouteSnapshot): boolean | Observable<boolean> {
        return this.dataService
            .GetItemById(route.params["id"])
            .pipe(
                mergeMap(_ => of(true)),
                catchError( _ => this.router.navigate(["/404"]))
            );
    }  

}
