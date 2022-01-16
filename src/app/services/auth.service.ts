import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatusService } from './status.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : any ; 

  constructor(private http:HttpClient, public statusServ:StatusService) { 

  }
  getUser(user:any){
    this.http.get('../../assets/users/'+ user.id + '.json').subscribe(
      p => {
        console.log(p);
        this.user = p ;
        this.statusServ.connexion = true;
        if (this.user.id == "admin"){
          this.statusServ.admin = true;
        }
        if(this.user.token) this.statusServ.token = this.user.token;
      }, 
      erreur => {
        console.log("Aie, erreur dans l'auth")
        this.statusServ.connexion = true;

      }
    )
  }
}
