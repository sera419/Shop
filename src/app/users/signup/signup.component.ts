import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/users/apiservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

   constructor(private service:ApiserviceService){}
  errmsg: any;
  errmsgshow=false;
  
  signupForm = new FormGroup({
    name:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    password:new FormControl("", Validators.required)
  });

  ngOnInit(): void { }
  
  signupSubmit() {
   if (this.signupForm.valid) {
     console.log(this.signupForm.value, 'signuform###');
     this.errmsgshow=false;

     //call apiservice
     this.service.signup(this.signupForm.value).subscribe((res)=>{
      console.log(res,'res##');
     })
   } else{
      this.errmsgshow=true;
      this.errmsg = 'All field required !!';
   }
   
  }

}
