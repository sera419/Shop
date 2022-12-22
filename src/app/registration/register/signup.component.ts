import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/sharePage/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

   constructor(private auth:AuthService){}
  email:string = '';
  password: string = '';
  

  ngOnInit(): void { }
  
  register() {
   if(this.email ==''){
    alert('entrez votre email');
    return;
   }
   if(this.password==''){
    alert('entrez votre mot de pass')
   }

   this.auth.register(this.email,this.password);
   this.email= '';
   this.password='';
  }
  
}
