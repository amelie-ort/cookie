import { Component, OnInit } from '@angular/core';
import { CreateUserService } from 'src/app/services/create-user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user:any = {id:'identifiant', mdp:'mdp'}

  constructor(public createUserServ:CreateUserService) { }

  ngOnInit(): void {
  }

  // create_user(){
    
  //   console.log(this.user.id) ;
  // }

}
