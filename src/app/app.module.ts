import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {routing} from "./app.routes";
import {LoginModule} from "./login/login.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {AuthHttp} from "./auth.http.service";
import {HttpModule} from "@angular/http";
import {AuthenticationService} from "./login/login.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, routing, LoginModule, DashboardModule, HttpModule, FormsModule
  ],
  providers: [AuthHttp, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
