import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  user:any = {id:'identifiant', mdp:'mdp'}

  constructor(public authServ:AuthService) { 

  }

  ngOnInit(): void {
  }

  getInput(){
    console.log(this.user);
  }

  auth(){
    this.authServ.getUser(this.user) ;
  }


}
