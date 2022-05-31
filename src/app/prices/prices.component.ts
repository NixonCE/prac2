import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  precios=['100$','200$','300$','400$','Personalizado'];
  mostrar=false;
  constructor() { }

  ngOnInit(): void {
  }

}
