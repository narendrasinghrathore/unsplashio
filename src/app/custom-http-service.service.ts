import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable()
export class CustomHttpServiceService {

  private weatherUrl:string = "http://samples.openweathermap.org/data/2.5/weather?q=$cityName&appid=b6907d289e10d714a6e88b30761fae22";

  private unsplashApi: string = "https://api.unsplash.com/";

  private getPhotosUrl: string = "photos";

  private logServiceName: string = "STATUS";


  const
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor(private http:HttpClient, private messageService:MessageService) {
  }

  getWeather(cityName:string) {
    return this.http.get<any>(this.weatherUrl.replace("$cityName", cityName))
      .pipe(
        tap(data => this.log('weather updated!')),
        catchError(this.handleError('getWeather',[]))
      )
  }

  getLatestPhotos():Observable<any>{
    return this.http.get<any>(this.unsplashApi+this.getPhotosUrl)
      .pipe(
        tap(data => this.log('Photos updated')),
        catchError(this.handleError('unsplash api GET/ photos',[]))
      )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T> (operation = 'operation', result?: T){
    return(error: any): Observable<T> =>{

      console.error(error);// log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);

    }
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(this.logServiceName + ' : ' + message);
  }


  /**
   * Get sample test data
   * */
  getSampleData():Observable<any>{
    return this.http.get('./assets/test-data.json').pipe(
      tap(data => this.log(('Sample data loaded'))),
      catchError(this.handleError('`Sample data not loaded',[]))
    );
  }

}
