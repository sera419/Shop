import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  public CartItemList: any = [];
  public productList= new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product: any){
    this.CartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product:any){
    this.CartItemList.push(product);
    this.productList.next(this.CartItemList);
    this.getTotalPrice();
    console.log(this.CartItemList);
    
  }
  getTotalPrice(): number{
    let grandTotal = 0;
    this.CartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal
  }
  removeCartItem(product:any){
    this.CartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.CartItemList.splice(index,1)
      }
    })
    this.productList.next(this.CartItemList);
  }
  removeAllCart(){
    this.CartItemList = []
    this.productList.next(this.CartItemList);
  }
}
