import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/utils/module/iuser';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user : IUser | undefined = <IUser>{} ;
  _id:unknown;

  constructor() { }

  ngOnInit(): void {
  }

}
