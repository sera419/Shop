import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartServiceService: CartServiceService) { }
public product : any= [];
public grandTotal!: number;
  ngOnInit(): void {
    this.cartServiceService.getProducts().subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartServiceService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartServiceService.removeCartItem(item);
    }
  emptyCart(){
    this.cartServiceService.removeAllCart();
  }

}
