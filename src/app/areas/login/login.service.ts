import { Injectable } from '@angular/core';
import { MainHttpService } from './../../services/main.service';
import { Observable } from 'rxjs';
import { HttpRequestHeaders } from './../../core/httpHeaders';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/components/loader/loader.service';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends MainHttpService {
  private baseUrl: string = environment.BASE_URL;
  constructor(
    http: HttpClient,
    headerService: HttpRequestHeaders,
    router: Router,
    loaderService: LoaderService) {
    super(http, headerService, router, loaderService);
  }
  customerLogin(data: any): Observable<any> {
    const options: HttpRequest<any> = new HttpRequest(this.appConfig.serviceMethods.post,
      this.baseUrl + this.appConfig.serviceRequests.login, data);
    return this.makeRequest(options, false);
  }
}
