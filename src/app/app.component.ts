import { Component, ViewEncapsulation } from '@angular/core';
import { Utility } from './utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,  // no shadow dom and  styles will be reflected in all components
  styleUrls: ['./app.component.scss', './../assets/styles/base.scss']
})
export class AppComponent {
  title = 'angular-template';
  private utility = new Utility();
  constructor() {}
}
