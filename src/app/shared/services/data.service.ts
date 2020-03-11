import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Item } from '../model/item';
import { PriceItem } from '../model/price-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl : string ="https://productdataweb20200310021247.azurewebsites.net/api/items";

  constructor(private http: HttpClient) { 

  }

  public GetItems():Observable<Array<Item>>{
    var uri = this.baseUrl;
    return this.http.get<Array<Item>>(uri)
      .pipe(catchError(this.handleError));
  }

  public GetItemById(id: number):Observable<Item>{
    var uri = `${this.baseUrl}/${id}`;
    return this.http.get<Item>(uri)
      .pipe(catchError(this.handleError));;
  } 

  public UpdateItemById(item:Item): Observable<Item>{
    var uri = `${this.baseUrl}/${item.id}`;
    return this.http.put<Item>(uri, item)
      .pipe(catchError(this.handleError));;
  }

  public CreateItem(item: Item) : Observable<Item>{
    var uri = this.baseUrl;
    return this.http.post<Item>(uri, item)
      .pipe(catchError(this.handleError));
  }

  public DeleteItem(item: Item) : Observable<string>{
    var uri = `${this.baseUrl}/${item.id}`;
    return this.http.delete<string>(uri)
      .pipe(catchError(this.handleError));
  }

  public GetMaxPriceItems():Observable<Array<PriceItem>>{
    var uri = `${this.baseUrl}/group/name/agg/max(price)`;
    return this.http.get<Array<PriceItem>>(uri)
      .pipe(catchError(this.handleError));
  }

  public GetMaxPriceItemByName(name: string):Observable<PriceItem>{
    var uri = `${this.baseUrl}/group/name/agg/max(price)?name=${name}`;
    return this.http.get<PriceItem>(uri)
      .pipe(catchError(this.handleError));;
  } 

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {    
      console.error('An error occurred:', error.error.message);
    } else {   
      console.error(
        `API returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError(
      'Unknow error; please try again later or contact administrators.');
  };
}
