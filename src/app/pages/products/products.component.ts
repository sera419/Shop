import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { __values } from 'tslib';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

public productList: any;
public filterCategory: any
searchKey:string="";
  constructor(private api : ApiService, private cartServiceService: CartServiceService ) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      this.filterCategory=res;
      this.productList.forEach((a:any)=>{
        if(a.category === "women's clothing" || a.category === "men's clothing"){
          a.category= "fashion"
        }
        Object.assign(a,{quantity:1,total:a.price})
      });
      console.log(this.productList);
      
    });
    this.cartServiceService.search.subscribe((val:any)=>{
      this.searchKey= val;
    })
  }
  addtoCart(item: any){
    this.cartServiceService.addtoCart(item);

  }
  filter(category: string){
    this.filterCategory= this.productList.filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })

  }


}
