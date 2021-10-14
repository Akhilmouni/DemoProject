import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { BaseResponse } from '../models/responseVO';
import { HttpRequestHeaders } from '../core/httpHeaders';
import { Router } from '@angular/router';
import { IAppConfig, AppConfig } from '../config/appConfig';
import { LoaderService } from './../components/loader/loader.service';

@Injectable({
    providedIn: 'root'
})
export class MainHttpService {
    public appConfig: IAppConfig = AppConfig;
    constructor(
        private http: HttpClient,
        public headerService: HttpRequestHeaders,
        public router: Router,
        public loaderService: LoaderService) { }
    private handleResponse(res: any, showLoader: boolean = true): Observable<any> {
        if (showLoader) {
            this.loaderService.hide();
        }
        if (res && res.status !== BaseResponse.OK && !res.message) {
            res.message = 'An internal server error occurred.';
        }
        return Object.assign(new BaseResponse(res.status), res);
    }
    private errorHandler(error: HttpErrorResponse) {
        // To know weather the error is from Client or server error
        this.loaderService.hide();
        if (error.error instanceof ErrorEvent) {
            console.log('Client side error. Please check the request and body');
        } else {
            console.log('Server Error. Please check the error from server side');
        }
        const errorMessage = error.message;
        return throwError(errorMessage);
    }

    public makeRequest(requestObj: HttpRequest<any>, showLoader: boolean = true): Observable<any> {
        const requestOptions = { headers: this.headerService.httpHeaders };
        if (!navigator.onLine) {
            this.router.navigate([this.appConfig.navigation.offline]);
        }
        if (showLoader) {
            this.loaderService.show();
        }
        switch (requestObj.method) {
            case 'GET': {
                return this.http.get(requestObj.url, requestOptions).pipe(
                    map(res => {
                        return this.handleResponse(res, showLoader);
                    }),
                    catchError(this.errorHandler), // Catch Errors if service fails
                );
            }
            case 'POST': {
                return this.http.post(
                    requestObj.url, requestObj.body, requestOptions).pipe(
                        map(res => {
                            return this.handleResponse(res, showLoader);
                        }),
                        catchError(this.errorHandler)
                    );
            }
            case 'PUT': {
                return this.http.put(
                    requestObj.url, requestObj.body, requestOptions).pipe(
                        map(res => {
                            return this.handleResponse(res, showLoader);
                        }),
                        catchError(this.errorHandler)
                    );
            }
            case 'PATCH': {
                return this.http.patch(
                    requestObj.url, requestObj.body, requestOptions).pipe(
                        map(res => {
                            return this.handleResponse(res, showLoader);
                        }),
                        catchError(this.errorHandler)
                    );
            }
            case 'DELETE': {
                return this.http.delete(
                    requestObj.url, requestOptions).pipe(
                        map(res => {
                            return this.handleResponse(res);
                        }),
                        catchError(this.errorHandler)
                    );
            }
        }
    }
}
