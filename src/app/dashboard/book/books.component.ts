/**
 * Created by PC on 2/27/2017.
 */

import {Component, OnInit} from "@angular/core";
import {BookService} from "./book.service";
import {Book} from "./Book";
@Component({
  selector: "books",
  templateUrl: "./books.html"
})
export class BooksComponent implements OnInit {

  public books: Array<Book>;
  public book: Book;
  public buttonValue: string;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.buttonValue = "Save";
    this.getAllBooks();
    this.book = new Book();
  }

  clearSelection() {
    this.buttonValue = "Save";
    this.book = new Book();
  }

  getAllBooks() {
    this.bookService.getAllBooks()
      .finally(() => {
      }).subscribe((data: any) => {
        this.books = data.map(function (datum) {
          return new Book(datum.id, datum.name, datum.author, datum.publisher, datum.quantity);
        })
      },
      err => {
        console.log(err);
      });
  }

  createBook() {
    this.bookService.addBook(this.book)
      .finally(() => {
        this.getAllBooks();
      }).subscribe((data: any) => {
    }, err => {
      console.log(err);
    });
  }


  findBook(id: number) {
    let responseData: any;
    this.bookService.findBook(id)
      .finally(() => {
        this.book = new Book(responseData.id, responseData.name, responseData.author, responseData.publisher, responseData.quantity);
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

  updateBook() {
    this.bookService.updateBook(this.book).finally(() => {
      this.getAllBooks();
    }).subscribe((data: any) => {
    }, err => {
      console.log(err);
    });
  }

  onClick() {
    if (this.buttonValue === "Save") {
      this.createBook();
    } else this.updateBook();

  }

}
