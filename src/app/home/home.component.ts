/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
// eslint-disable-next-line import/prefer-default-export
export class HomeComponent implements OnInit {
  public a: string;

  constructor() {
    this.a = 'hi';
  }

  print() {
    // eslint-disable-next-line no-console
    console.log(this.a);
    return '';
  }

  static sayHi() {
    // eslint-disable-next-line no-console
    console.log('hi');
  }

  ngOnInit(): void {
    // test
  }
}
