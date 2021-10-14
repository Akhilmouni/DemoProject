import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loaderObserver: Observer<any>;
  public loaderObservable: Observable<boolean>;
  constructor() {
    this.loaderObservable = new Observable<boolean>((observer: Observer<boolean>) => {
      this.loaderObserver = observer;
  });
   }
  show() {
    if (this.loaderObserver) {
      this.loaderObserver.next(true);
    }
  }

  hide() {
    if (this.loaderObserver) {
      this.loaderObserver.next(false);
    }
  }
}
