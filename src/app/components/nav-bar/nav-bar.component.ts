import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { print } from 'util';

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

  constructor(private r: Router) { }

  ngOnInit() {
  }

  Contacts(){
    this.r.navigate(['/Contacts']);
  }

  Home(){
    this.r.navigate(['/']);
  }

  AboutUs(){
    this.r.navigate(['/AboutUs']);
  }

}
