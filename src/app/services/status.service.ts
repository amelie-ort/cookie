import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  connexion:any;
  token:unknown=null;
  admin:any;
  constructor() { }

  deconnexion(){
    this.connexion = false;
    this.admin = false;
  }
}
