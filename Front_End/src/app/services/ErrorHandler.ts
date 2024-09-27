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
      // retry({
      //   delay: (error) =>
      //     error.pipe(
      //       concatMap((checkError: HttpErrorResponse, count: number) => {
      //         if (checkError.status === ErrorCodes.serverDown && count <= 5) {
      //           return of(checkError).pipe(delay(2000));
      //         } else {
      //           return throwError(() => new Error(checkError.error));
      //         }
      //       })
      //     ),
      // }),
      catchError((error: HttpErrorResponse) => {
        const errorMessage = this.setErrorMessage(error);

        this._atertify.error(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  shouldReTry(error: HttpErrorResponse): Observable<unknown>{
    if(error.status === ErrorCodes.serverDown)
      {
        retry({count: 5, delay: 2000});
      }
      else{
        return throwError(() => Error(error.error));
      }
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
