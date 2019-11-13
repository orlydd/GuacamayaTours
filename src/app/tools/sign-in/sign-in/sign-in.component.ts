import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  user: firebase.User;

  authError: any;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user; }), 
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }
  

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
    this.router.navigate(['/dashboard']);
  }
  
}
