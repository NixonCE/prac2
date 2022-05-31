import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  coname:string="DevFuture";
  navs=['Proyectos','Precios','Contactos','Reseñas']
  img:string="https://images.vexels.com/media/users/3/224169/isolated/preview/dbfe1f493ad01117fa4ec5ba10150e4d-logotipo-de-programaci-n-inform-tica.png";

  constructor() { }

  ngOnInit(): void {
   
  }

}
