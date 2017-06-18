/**
 * Created by PC on 2/27/2017.
 */

import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {User} from "./User";
@Component({
  selector: "users",
  templateUrl: "./users.html"
})
export class UsersComponent implements OnInit {

  public users: Array<User>;
  public user: User;
  public buttonValue: string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.buttonValue = "Save";
    this.getAllUsers();
    this.user = new User();
  }

  clearSelection() {
    this.buttonValue = "Save";
    this.user = new User();
  }

  getAllUsers() {
    this.userService.getAllUsers()
      .finally(() => {
      }).subscribe((data: any) => {
        this.users = data.map(function (datum) {
          return new User(datum.id, datum.email, datum.password, datum.name, datum.lastName, datum.phone, datum.type);
        })
      },
      err => {
        console.log(err);
      });
  }

  createUser() {
    this.userService.addUser(this.user)
      .finally(() => {
        this.getAllUsers();
      }).subscribe((data: any) => {
    }, err => {
      console.log(err);
    });
  }


  findUser(email: string) {
    let responseData: any;
    this.userService.findUser(email)
      .finally(() => {
        this.user = new User(responseData.id, responseData.email, responseData.password,
          responseData.name, responseData.lastName, responseData.phone, responseData.type);
        this.buttonValue = "Update";
      })
      .subscribe((data: any) => {
          responseData = data;
        },
        err => {
          console.log(err);
        }
      );

  }

  updateUser() {
    this.userService.updateUser(this.user).finally(() => {
      this.getAllUsers();
    }).subscribe((data: any) => {
    }, err => {
      console.log(err);
    });
  }

  onClick() {
    if (this.buttonValue === "Save") {
      this.createUser();
    } else this.updateUser();

  }

}
