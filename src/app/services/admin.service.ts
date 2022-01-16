import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICookie } from '../utils/module/icookie';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  cookies:Array<ICookie> = [];

  constructor(private http:HttpClient) {
    this.getCookies(); 
  }

  delCookie(cookie:any){

  }

  getCookies(){
    this.http.get<Array<ICookie>>(environment.SERVEUR_URL+'data/'+'cookies.json').subscribe(
      data => {
        for (const el of data) {
          el["photo"] = environment.SERVEUR_URL+'images/'+el["photo"]
        }
        this.cookies = data;
        console.log(data);
        }
    )
  }
}
