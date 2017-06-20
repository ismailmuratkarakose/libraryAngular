import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "./login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,private router:Router) {
  }

  public isAuthenticated: boolean = false;
  public isAdmin: boolean = false;
  public isLabrarian: boolean = false;

  ngOnInit(): void {
    this.isAuthenticated = this.authenticationService.isUserAuthanticated();
    this.isAdmin = this.authenticationService.isUserAdmin();
    this.isAdmin = this.authenticationService.isUserLibrarian();
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);

  }

}
