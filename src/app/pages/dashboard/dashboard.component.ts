import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { DataService } from 'src/app/sharePage/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productsList : Product[] = [];
  productObj : Product = {
    id: '',
    name: '',
    category: '',
    price: ''
  };
  id: string = '';
  name: string = '';
  category: string = '';
  price : string = '';
  
    constructor(private data: DataService) { }
  
    ngOnInit(): void {
      this.getAllProducts();
    }
  
    getAllProducts() {
  
      this.data.getAllProducts().subscribe(res => {
  
        this.productsList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
        
      }, err => {
          alert('Error while fetching product data');
      }) 
  
      
    }
  
    resetForm() {
      this.id = '';
      this.name = '';
      this.category= '';
      this.price  = '';
    }
  
    addProduct() {
      if(this.name == '' || this.category == '' || this.price == '') {
        alert("Fill informations please");
      }
  
      this.productObj.id = '';
      this.productObj.name = this.name;
      this.productObj.category = this.category;
      this.productObj.price = this.price;
  
      this.data.addProduct(this.productObj);
      this.resetForm();
  
    }
  
  
  
    updateProduct() {
  
    }
  
    deleteProduct(product: Product) {
      if(window.confirm('Are you sure to delete'+product.id+''+product.name+'?')) {
        this.data.deleteProduct(product);
      }  
    }
  }
   