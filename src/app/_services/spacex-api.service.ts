import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {

  constructor(private http: HttpClient) { }

  getSpacexDetails(limit) {
    var url = `https://api.spaceXdata.com/v3/launches?limit=${limit}`
    return this.http.get(url).pipe(
      map(response => { return response; }));
  }
}
