import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  term : string;
  
  constructor(public adminServ:AdminService) { 
    this.term = ''
  }

  ngOnInit(): void {
  }

}
