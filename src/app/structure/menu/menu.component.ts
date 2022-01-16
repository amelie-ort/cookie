import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  logo_panier:string = "/assets/images/logo_panier.png"
  constructor(public statusServ:StatusService) { }

  ngOnInit(): void {
  }

}
