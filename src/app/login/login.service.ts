import {Injectable} from "@angular/core";
import {Headers, RequestOptions} from "@angular/http";
import {AuthHttp} from "../auth.http.service";
import {GlobalVariable} from "../../assets/globals";
/**
 * Created by isoman54 on 18.06.2017.
 */


@Injectable()
export class AuthenticationService {
  constructor(private authHttp: AuthHttp) {
  }

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  login(email: string,password:string) {
    return this.authHttp.post(GlobalVariable.BASE_API_URL + '/users/login', JSON.stringify({
      email: email,
      password:password
    }), this.options);
  }

  isUserAuthanticated():boolean{
    if(localStorage.getItem("userId")!=null && Number(localStorage.getItem("userId"))>=1){
      return true;
    }else{
      return false;
    }
  }
  isUserAdmin():boolean{
    if(localStorage.getItem("userType")!=null && localStorage.getItem("userType")==="ADMIN"){
      return true;
    }else{
      return false;
    }
  }
}
