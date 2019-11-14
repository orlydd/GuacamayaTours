
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { auth } from 'firebase';
import { Users } from 'src/app/models/authUser/user';
import { FirebaseAuth } from '@angular/fire';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user: Observable<Users>;


  userDoc: AngularFirestoreDocument<Users>;

  constructor(private router: Router, public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = this.afAuth.authState.pipe(
      // tslint:disable-next-line:no-shadowed-variable
      switchMap(user => {
        if (user) {
          return this.afs.doc<Users>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  getUser(): Promise<any>{
    return this.afAuth.authState.pipe().toPromise();
  }
  get authenticated(): boolean{
    return this.user != null;
  }
  isAuth(){
    return this.afAuth.authState.pipe(map(auth=>auth));
  }

  get currentUserObservable(): any{
    return this.afAuth.auth;
  }

  getUserState(){
    return this.afAuth.authState;
  }

  logIn(email: string, password: string) {

    return new Promise((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then(userData => resolve(userData),
      err=> reject(err));
    })
    /* this.afAuth.auth.signInWithEmailAndPassword(email, password).then(credentials => {
      this.router.navigate(['/dashboard']);
    }).catch(err => {
      alert(err.message);
    }); */
  }

  logOut(): void {
    this.afAuth.auth.signOut() ;
    this.router.navigate(['/Home']);
  
  }
}