import {Injectable} from "@angular/core";
import {RequestOptions,Headers} from "@angular/http";
import {AuthHttp} from "../../auth.http.service";
import {Reservation} from "./Reservation";
import {GlobalVariable} from "../../../assets/globals";
/**
 * Created by isoman54 on 18.06.2017.
 */

@Injectable()
export class ReservationService{


  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private authHttp: AuthHttp) {
  }

  public addReservation(reservation: Reservation) {
    return this.authHttp.post(GlobalVariable.BASE_API_URL + '/reservations/add', JSON.stringify(reservation), this.options);
  }

  public getAllReservations() {
    return this.authHttp.get(GlobalVariable.BASE_API_URL + '/reservations/getAll', this.options);
  }

  public findReservation(id: number) {
    return this.authHttp.post(GlobalVariable.BASE_API_URL + '/reservations/get', JSON.stringify({id: id}), this.options);
  }

  public updateReservation(reservation: Reservation) {
    return this.authHttp.post(GlobalVariable.BASE_API_URL + '/reservations/update', JSON.stringify(reservation), this.options);
  }


}
