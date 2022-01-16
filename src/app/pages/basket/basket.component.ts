import { Component, OnInit } from '@angular/core';
import { CookiesService } from 'src/app/services/cookies.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  d : any;
  constructor(public cookieServ:CookiesService) {
    for (let c of this.cookieServ.cookies){
      this.d[c.nom] = window.localStorage.getItem(c.nom)
    }
  }

  ngOnInit(): void {
  }

}
