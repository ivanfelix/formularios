import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre:null,
    apellido:null,
    correo:null,
    pais:''
  }
  paises = [
    {
      codigo:'CRI',
      pais:'Costa Rica'
    },
    {
      codigo:'ES',
      pais:'España'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log(forma)
    console.log(forma.value)
  }

}
