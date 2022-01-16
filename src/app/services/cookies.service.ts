import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICookie } from '../utils/module/icookie';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class CookiesService {


  cookies:Array<ICookie> = [];

  constructor(private http:HttpClient) {
    this.getCookies();
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

  getEtudiantById(id: unknown):ICookie | undefined {
    return this.cookies.find(e => e._id == id)
  }

  add_basket(cookie:ICookie){
    console.log(cookie.nom)
    let hist = window.localStorage.getItem(cookie.nom)
    window.localStorage.setItem(cookie.nom, hist != null ? String(parseInt(hist) +1) : "1" )
  }
  rm(){
    window.localStorage.removeItem("cookie1")
    window.localStorage.removeItem("cookie2")
  }
}
