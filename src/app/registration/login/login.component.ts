import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/sharePage/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : string = '';
  password: string = '';
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    if(this.email== ''){
      alert('veuillez entrer votre email');
    return;
    }
    
     if(this.password== ''){
      alert('veuillez entrer votre mot de pass');
    return;
     }
    this.auth.login(this.email, this.password);

    this.email= '';
    this.password='';
    
  }
  
   
}
