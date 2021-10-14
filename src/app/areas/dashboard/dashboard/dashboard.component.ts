import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './../../../reducers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  constructor(
    private store: Store<IAppState>
  ) {
    this.store.select(storeObj => storeObj.User).subscribe(userData => {
      if (userData) {
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
      }
    });
  }
  ngOnInit() {
  }
}
