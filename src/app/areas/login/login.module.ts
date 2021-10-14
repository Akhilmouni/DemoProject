import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { UserActions } from './../../actions/user.actions';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
  ],
  providers: [UserActions]
})
export class LoginModule { }
