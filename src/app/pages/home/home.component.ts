import { Component, OnInit } from '@angular/core';
import { OderDetailsService } from 'src/app/service/oder-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:OderDetailsService){}
  
  clothesData: any;
  caleconData: any;
  pantalonData: any;

  ngOnInit(): void {
    this.clothesData = this.service.clothesDetails;
    this.caleconData = this.service.calecon;
    this.pantalonData = this.service.pantalon

  };
}
