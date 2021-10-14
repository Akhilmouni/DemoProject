import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from './../../../actions/user.actions';
import { IAppState } from './../../../reducers';
import { Router } from '@angular/router';
import { IAppConfig, AppConfig } from 'src/app/config/appConfig';
import { LoaderService } from 'src/app/components/loader/loader.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public errors: any = {

  };
  private appConfig: IAppConfig = AppConfig;
  constructor(
    private userActions: UserActions,
    private store: Store<IAppState>,
    private router: Router,
    private loaderService: LoaderService,
    private loginService: LoginService
  ) {
  }
  ngOnInit() {
    // this.loginService.customerLogin({
    // }).subscribe(res=>{
    //   if(res.ok&&res.ok()){
    //   }
    // })
  }
  validate(): boolean {
    this.errors = {};
    if (!this.firstName || !this.firstName.trim()) {
      this.errors.firstName = '*First Name Required';
    }
    if (!this.lastName || !this.lastName.trim()) {
      this.errors.lastName = '*Last Name Required';
    }
    return Object.keys(this.errors).length === 0;
  }
  registrationHandler(): void {
    if (this.validate()) {
      this.loaderService.show();
      setTimeout(() => { // timeout added just for showing loader remove this later.
        const data = {
          firstName: this.firstName,
          lastName: this.lastName
        };
        this.store.dispatch(this.userActions.saveUserDetails(data));
        this.loaderService.hide();
        this.router.navigate([this.appConfig.navigation.dashboard]);
      }, 3000);
    }
  }
}
