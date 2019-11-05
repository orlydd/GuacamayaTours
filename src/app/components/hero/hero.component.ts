import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() description: string;
  @Input() image: string;

  ngOnInit() {
  }

}
