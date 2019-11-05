import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { print } from 'util';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private r: Router) { }

  ngOnInit() {
  }

  Home(){
    this.r.navigate(['/Home']);
  }

  AboutUs(){
    this.r.navigate(['/AboutUs']);
  }

  Contacts(){
    this.r.navigate(['/Contacts']);
  }

}
