import {Injectable} from "@angular/core";
import {AuthHttp} from "../../auth.http.service";
import {RequestOptions,Headers} from "@angular/http";
import {GlobalVariable} from "../../../assets/globals";
import {User} from "./User";
/**
 * Created by isoman54 on 18.06.2017.
 */

@Injectable()
export class UserService{

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private authHttp: AuthHttp) {
  }
  public addUser(user: User) {
    return this.authHttp.post(GlobalVariable.BASE_API_URL + '/users/add', JSON.stringify(user), this.options);
  }

  public updateUser(User: User) {
    return this.authHttp.post(GlobalVariable.BASE_API_URL + '/users/update', JSON.stringify(User), this.options);
  }

  public getAllUsers() {
    return this.authHttp.get(GlobalVariable.BASE_API_URL + '/users/getAll', this.options);
  }

  public findUser(email: string) {
    return this.authHttp.post(GlobalVariable.BASE_API_URL + '/users/get', JSON.stringify({email: email}), this.options);
  }

  public deleteUser(id: number) {
    return this.authHttp.post(GlobalVariable.BASE_API_URL + '/users/delete', JSON.stringify({id: id}), this.options);
  }

}
