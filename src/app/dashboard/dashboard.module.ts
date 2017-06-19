import {BrowserModule} from "@angular/platform-browser";
import {DashboardComponent} from "./dashboard.component";
import {NgModule} from "@angular/core";
import {AuthenticationService} from "../login/login.service";
import {UsersComponent} from "./user/users.component";
import {ReservationsComponent} from "./reservation/reservations.component";
import {BooksComponent} from "./book/books.component";
import {UserService} from "./user/user.service";
import {BookService} from "./book/book.service";
import {ReservationService} from "./reservation/reservation.service";
import {FormsModule} from "@angular/forms";
import {TypeaheadModule} from "ngx-bootstrap";

@NgModule({
  imports: [BrowserModule,FormsModule,TypeaheadModule.forRoot()],
  providers: [AuthenticationService, UserService, BookService, ReservationService],
  declarations: [
    DashboardComponent, UsersComponent, ReservationsComponent, BooksComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {
}
