import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ModuleWithProviders} from "@angular/core";
import {DashboardComponent} from "app/dashboard/dashboard.component";
import {UsersComponent} from "./dashboard/user/users.component";
import {ReservationsComponent} from "app/dashboard/reservation/reservations.component";
import {BooksComponent} from "./dashboard/book/books.component";
export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'users', component: UsersComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'books', component: BooksComponent},
  {path: '**', redirectTo: '/login'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
