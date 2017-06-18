import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from "./login.service";
import {AuthHttp} from "../auth.http.service";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule],
  declarations: [LoginComponent],
  providers: [AuthenticationService],
  exports: [LoginComponent],
})
export class LoginModule {
}
