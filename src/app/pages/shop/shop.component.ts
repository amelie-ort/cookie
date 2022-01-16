import { Component, OnInit } from '@angular/core';
import { CookiesService } from 'src/app/services/cookies.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  term : string;

  constructor(public cookieServ:CookiesService) {
    this.term = "";
  }

  ngOnInit(): void {
  }

}
