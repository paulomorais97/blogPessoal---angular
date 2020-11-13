import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

 
   
  
  constructor(
    private authService:  AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
this.authService.logar(this.userLogin).subscribe((resp: UserLogin) =>{
  this.userLogin = resp
  
  environment.token = this.userLogin.token
  this.router.navigate(['/feed'])
  this.alert.showAlertInfo('Seja bem-vindo(a)')
  
})
  }
}
