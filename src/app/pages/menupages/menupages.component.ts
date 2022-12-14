import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { OderDetailsService } from 'src/app/service/oder-details.service';

@Component({
  selector: 'app-menupages',
  templateUrl: './menupages.component.html',
  styleUrls: ['./menupages.component.scss']
})
export class MenupagesComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OderDetailsService) {}
 
  getMenuId:any;
  menuData: any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');

    if (this.getMenuId) {
      this.menuData = this.service.clothesDetails.filter((value)=>{
        return value.id == this.getMenuId
      });
      console.log(this.menuData,'menudata>>');
    }

  }

}
