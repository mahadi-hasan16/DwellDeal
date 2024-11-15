import { inject, Injectable } from '@angular/core';
import { Property } from '../../models/Property';
import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  Resolve,
  ResolveFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { catchError, Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PropertyDetailsResolver implements Resolve<Property | null> {

// constructor(private housingService: HousingService, private router: Router) { }
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Property | null > | Property {
//     const id = route.params['id'];
//     return this.housingService.getPropertyDetail(+id).pipe(
//       catchError(
//         error => {
//           this.router.navigate(['/']);
//           return of(null);
//         }
//       )
//     );
//   }

// }

export const propertyDetailResolver: ResolveFn<Property | null> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Observable<Property | null> => {
  const housingService = inject(HousingService);
  const router = inject(Router);
  
  const id = Number(route.params['id']);
  return housingService.getPropertyDetail(id).pipe(
    catchError(
      error => {
        router.navigate(['/']);
        return of(null);
      }
    )
  )
};
