import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OderDetailsService } from '../service/oder-details.service';
@Component({
  selector: 'app-calecon-page',
  templateUrl: './calecon-page.component.html',
  styleUrls: ['./calecon-page.component.scss']
})
export class CaleconPageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OderDetailsService) {}
 
  getcaleconId:any;
  caleconData: any;

  ngOnInit(): void {
    this.getcaleconId = this.param.snapshot.paramMap.get('id');
    console.log(this.getcaleconId,'getcalecon');

    if (this.getcaleconId) {
      this.caleconData = this.service.calecon.filter((value)=>{
        return value.id == this.getcaleconId
      });
      console.log(this.caleconData,'calecondata>>');
    }

  }

}
