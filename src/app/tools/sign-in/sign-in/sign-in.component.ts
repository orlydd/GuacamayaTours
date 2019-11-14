import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators,  FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  //user: firebase.User;
  
  constructor(private formBuilder: FormBuilder, public authService: AuthService, public router: Router) {}
  
  public email: string = '';
  public password: string = '';

  ngOnInit() {
    
  }
  
  /**
   * email: guacamayatoursadm@gmail.com
   * pass: guacamayatours
   */

  onLogin(): void {
    this.authService.logIn(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLogout() {
    this.authService.logOut();
  }
  onLoginRedirect(): void {
    this.router.navigate(['/dashboard']);
  }
  
  
}
