import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  concatMap,
  count,
  delay,
  Observable,
  of,
  retry,
  retryWhen,
  throwError,
} from 'rxjs';
import { AlertifyService } from './alertify.service';
import { ErrorCodes } from '../enums/ErrorCodes';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private _atertify: AlertifyService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //console.log('OK');
    return next.handle(req).pipe(
      
      
      retry({
        count: 4,
        delay: (error: HttpErrorResponse, count: number) =>{
          if(error.status === ErrorCodes.serverDown){
            return of(error).pipe(delay(100));
          }
          return throwError(() => {new Error(error.error)})
        }
      }),

      catchError((error: HttpErrorResponse) => {
        const errorMessage = this.setErrorMessage(error);

        this._atertify.error(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  setErrorMessage(error: HttpErrorResponse): string {
    let errorMessage = 'Unknown Error has been occured.';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      if (error.status !== 0) {
        errorMessage = error.error;
      }
    }

    return errorMessage;
  }
}
