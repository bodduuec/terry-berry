import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment as env} from '../../../environments/environment';
import { MyInfo } from "../../about-me/components/my-info";

@Injectable({
  providedIn: 'root'
})
export class MyInfoService {
  myInfo: MyInfo = {
    name: '',
    age: 0,
    email: '',
    mobile: '',
    interests: '',
    description: ''
  };
  myInfoLoaded: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  loadMyInfo() {
    return this.http.get(`${env.baseUrl}/myInfo`);
  }
}
