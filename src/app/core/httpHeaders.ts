import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
@Injectable(
    {
        providedIn: 'root'
    }
)
export class HttpRequestHeaders {
    public headers: HttpHeaders;
    private userLanguage: string = navigator.language ? navigator.language.substr(0, 2) : 'en';
    constructor() {

    }

    public get httpHeaders(): HttpHeaders {
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        this.headers = this.headers.append('x-language', 'en');
        this.headers = this.headers.append('x-mh-timezone', '-330');
        return this.headers;
    }
}
