import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import{staff} from './modules/staff';

@Injectable({
  providedIn: 'root'
})
export class ApitestService {
  staff:string="http://localhost:3000/staff";

  constructor(private httpClient:HttpClient) { }

  
  getStaff() :Observable<staff>
  {
    return this.httpClient.get<staff>(this.staff);
  }

}