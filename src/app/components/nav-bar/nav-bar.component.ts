import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isCollapse = true;
  
  toggleState() {
    let foo = this.isCollapse
    this.isCollapse = foo === false ? true : false;
  }

  public appName: string = 'Guacamaya Tours';
  
  public isLogged: boolean = false;

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }
    
    ngOnInit() {
        this.getCurrentUser();
      }


      /**
       * If the user is logged in we will show the admin navigation navbar
       */
    getCurrentUser() {
      this.authService.isAuth().subscribe(auth => {
        if (auth) {
          console.log('user logged');
          this.isLogged = true;
        } else {
          console.log('NOT user logged');
          this.isLogged = false;
        }
      });
    }

    /**
     * Log Out Fuction
     */
    onLogout() {
      this.afsAuth.auth.signOut();
    }
  }
