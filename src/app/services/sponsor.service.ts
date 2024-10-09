import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  constructor( private _HttpClient:HttpClient ) { }


  newSponsor(data: object):Observable<any> {

    return this._HttpClient.post(`https://dev.nobala.edu.sa/api/sponsors/`, data)
  }


  getSponsors(page:number):Observable<any> {

    return this._HttpClient.get(`https://dev.nobala.edu.sa/api/sponsors?page=${page}`)
  }
}
