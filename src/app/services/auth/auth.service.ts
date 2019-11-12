import { Injectable, NgZone } from '@angular/core';
import {User} from 'src/app/models/admin.model';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; //save logged in user data

  constructor(
    public afs : AngularFirestore, //Inject firestore service
    public afAuth :AngularFireAuth,//Inject firebas auth service
    public router: Router,
    public ngZone : NgZone
  ) { 
    /**
     * Saving user data in localstorage hen logged in setting up null
     * hen logged out
     */
    this.afAuth.authState.subscribe(
      user =>{
        if(user){
          this.userData = user;
          localStorage.setItem('user',JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
        }else{
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      }
    )
  }
  /**
   * Singin in with username/password
   * 
   */
  setUserData(user){
    const userRef : AngularFirestoreDocument<any>= this.afs.doc(`users/${user.uid}`);
    const userData: User ={
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified

    }

    return userRef.set(userData,{merge:true})
  }

  /**
   * Return true hen user is logged in && email is verified
   */
  get isLoggedIn(): boolean{
    const user = JSON.parse(localStorage.getItem('user'));
    return (user!== null && user.emailVerified !== false)? true: false;
  }

  SignOut(){
    return this.afAuth.auth.signOut().then(()=>{
      localStorage.removeItem('user');
      this.router.navigate(['sign-in'])
    })
  }
}
