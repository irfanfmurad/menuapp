import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products = products;

  constructor() {}

}
