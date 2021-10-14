import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IAppConfig, AppConfig } from './../../../app/config/appConfig';
@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss']
})
export class OfflineComponent implements OnInit, OnDestroy {
  private timerInstance: any;
  public online: boolean;
  private appConfig: IAppConfig = AppConfig;
  constructor(private router: Router) {
    this.timerInstance = setInterval(() => {
      this.online = navigator.onLine;
    }, 5000);
  }
  ngOnInit() {
  }
  reloadPage(): void {
    if (navigator.onLine) {
      this.router.navigate([this.appConfig.navigation.dashboard]);
    }
  }
  ngOnDestroy(): void {
    clearInterval(this.timerInstance);
  }
}
