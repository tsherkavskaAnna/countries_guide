import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any[]> {
    return this.http.get<any>('https://restcountries.com/v3.1/all');
  }

  searchCountry(query: string): Observable<any> {
    return this.http.get<any>(`https://restcountries.com/v3.1/name/${query}`);
  }

  singleCountry(name: string): Observable<any> {
    return this.http.get<any>(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
  }
}
