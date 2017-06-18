import {AuthHttp} from "../../auth.http.service";
import {RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {GlobalVariable} from "../../../assets/globals";
import {Book} from "./Book";
/**
 * Created by isoman54 on 18.06.2017.
 */
@Injectable()
export class BookService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private authHttp: AuthHttp) {
  }


  public addBook(book: Book) {
    return this.authHttp.post(GlobalVariable.BASE_API_URL + '/books/add', JSON.stringify(book), this.options);
  }

  public updateBook(book: Book) {
    return this.authHttp.post(GlobalVariable.BASE_API_URL + '/books/update', JSON.stringify(book), this.options);
  }

  public getAllBooks() {
    return this.authHttp.get(GlobalVariable.BASE_API_URL + '/books/getAll', this.options);
  }

  public findBook(id: number) {
    return this.authHttp.post(GlobalVariable.BASE_API_URL + '/books/get', JSON.stringify({id: id}), this.options);
  }

  public deleteBook(id: number) {
    return this.authHttp.post(GlobalVariable.BASE_API_URL + '/books/delete', JSON.stringify({id: id}), this.options);
  }
}
