import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AlertifyService } from "./alertify.service";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class HttpErrorInterceptor implements HttpInterceptor{
    constructor(private _atertify: AlertifyService){}
    intercept(req: HttpRequest<any>, next: HttpHandler){
        //console.log('OK');
        return next.handle(req)
        .pipe(
            catchError((error: HttpErrorResponse)=>{

                const errorMessage = this.setErrorMessage(error);
                
                this._atertify.error(errorMessage);
                return throwError(() => new Error(errorMessage)); 
            })
        )
    }

    setErrorMessage(error: HttpErrorResponse): string{
        let errorMessage = 'Unknown Error has been occured.';

        if(error.error instanceof ErrorEvent)
        {
            errorMessage = error.error.message;
        }
        else{
            if(error.status !== 0)
            {
                errorMessage = error.error;
            }
        }

        return errorMessage;
    }
}