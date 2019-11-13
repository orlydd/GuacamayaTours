import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  user: firebase.User;
  constructor(public auth: AuthService, private router: Router
  ) { }

  ngOnInit() {
    this.auth.getUserState().subscribe(user=>{
      this.user = user;
    })
   }

  logout(){
    this.auth.logout();
    this.router.navigate(['/sign-in']);
  }


}
