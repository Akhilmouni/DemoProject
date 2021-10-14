import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  public show = false;
  private subscription: Subscription = undefined;
  private activeRequests: number = 0;

  constructor(
    private lpinnerService: LoaderService
  ) { }

  ngOnInit() {
    this.createServiceSubscription();
  }
  createServiceSubscription() {
    this.subscription = this.lpinnerService.loaderObservable.subscribe(show => {
      if (show) {
        this.startSpinner();
      } else {
        this.stopSpinner();
      }
    });
  }
  startSpinner() {
    this.show = true;
    this.activeRequests++;
  }
  stopSpinner() {
    if (this.activeRequests === 1) {
      this.show = false;
    }
    if (this.activeRequests > 0) {
      this.activeRequests--;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
