import { Component} from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html'
})
export class DataComponent{
  forma: FormGroup;
  constructor() { 
    this.forma = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl(),
      'correo': new FormControl()
    })
  }
  guardarCambios(){
    console.log(this.forma.value);
  }

}
