import {User} from "../user/User";
import {Book} from "../book/Book";
/**
 * Created by isoman54 on 18.06.2017.
 */

export class Reservation{
  public id:number;
  public user:User;
  public book:Book;
  public borrowDate:Date;
  public returnDate:Date;
  public status:string;


  constructor(id?: number, user?: User, book?: Book, borrowDate?: Date, returnDate?: Date, status?: string) {
    this.id = id;
    this.user = user;
    this.book = book;
    this.borrowDate = borrowDate;
    this.returnDate = returnDate;
    this.status = status;
  }
}
