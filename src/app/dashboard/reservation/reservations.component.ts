/**
 * Created by PC on 2/27/2017.
 */

import {Component, OnInit} from "@angular/core";
import {ReservationService} from "./reservation.service";
import {Reservation} from "./Reservation";
import {User} from "../user/User";
import {Book} from "../book/Book";
@Component({
  selector: "reservations",
  templateUrl: "./reservations.html"
})
export class ReservationsComponent implements OnInit {

  public reservations: Array<Reservation>;
  public reservation: Reservation;
  public book: Book;
  public user: User;
  public buttonValue: string;

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.buttonValue = "Save";
    this.getAllReservations();
    this.reservation = new Reservation();
    this.book = new Book();
    this.user = new User();
  }

  clearSelection() {
    this.buttonValue = "Save";
    this.reservation = new Reservation();
    this.book = new Book();
    this.user = new User();
  }

  getAllReservations() {
    let response: any;
    this.reservationService.getAllReservations()
      .finally(() => {
        console.log(this.reservations)
      }).subscribe((data: any) => {
        this.reservations = data.map(function (datum) {
          let temp: User = new User(datum.user.id, datum.user.email, datum.user.password, datum.user.name, datum.user.lastName, datum.user.phone, datum.user.type);
          let tempBook = new Book(datum.book.id, datum.book.name, datum.book.author, datum.book.publisher, datum.book.quantity);
          return new Reservation(datum.id, temp, tempBook, datum.borrowDate, datum.returnDate, datum.status);
        })
      },
      err => {
        console.log(err);
      });
  }

  createReservation() {
    this.reservationService.addReservation(this.reservation)
      .finally(() => {
        this.getAllReservations();
      }).subscribe((data: any) => {
    }, err => {
      console.log(err);
    });
  }


  findReservation(id: number) {
    let responseData: any;
    this.reservationService.findReservation(id)
      .finally(() => {
        this.user = new User(responseData.user.id, responseData.user.email, responseData.user.password, responseData.user.name, responseData.user.lastName, responseData.user.phone, responseData.user.type);
        this.book = new Book(responseData.book.id, responseData.book.name, responseData.book.author, responseData.book.publisher, responseData.book.quantity);
        this.reservation = new Reservation(responseData.id, this.user, this.book, responseData.borrowDate, responseData.returnDate, responseData.status);
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

  updateReservation() {
    this.reservationService.updateReservation(this.reservation).finally(() => {
      this.getAllReservations();
    }).subscribe((data: any) => {
    }, err => {
      console.log(err);
    });
  }

  onClick() {
    if (this.buttonValue === "Save") {
      this.createReservation();
    } else this.updateReservation();

  }


}
