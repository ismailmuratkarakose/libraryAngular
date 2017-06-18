/**
 * Created by isoman54 on 18.06.2017.
 */
export class Book{
  public id:number;
  public name:string;
  public author:string;
  public publisher:string;
  public quantity:number;


  constructor(id?: number, name?: string, author?: string, publisher?: string, quantity?: number) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.publisher = publisher;
    this.quantity = quantity;
  }
}
