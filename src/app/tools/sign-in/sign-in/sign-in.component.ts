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
  form = this.formBuilder.group(
    {
      email: ['', [ Validators.required]],
      password: ['', [ Validators.required]],
    }
  );
  constructor(private formBuilder: FormBuilder, public authService: AuthService, public router: Router) {
   
  }

  ngOnInit() {
    
  }
  
  /**
   * email: guacamayatoursadm@gmail.com
   * pass: guacamayatours
   */

  login(): void {
    this.authService.logIn(this.email, this.pass).then((res)=>{
      this.router.navigate(['/dashboard']);
    }).catch(err=>console.log('err', err.message));
  }
  
  
}
