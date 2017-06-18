/**
 * Created by isoman54 on 18.06.2017.
 */

export class User{
  public id:number;
  public email:string;
  public password:string;
  public name:string;
  public lastName:string;
  public phone:string;
  public type:string;


  constructor(id?: number, email?: string, password?: string, name?: string, lastName?: string, phone?: string, type?: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.lastName = lastName;
    this.phone = phone;
    this.type = type;
  }
}

