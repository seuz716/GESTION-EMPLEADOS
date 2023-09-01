import { Component, OnInit } from '@angular/core'; // Cambié las comillas

import { EmpleadoService } from '../../services/empleado.service'; // Cambié las comillas

import { NgForm } from '@angular/forms'; // Cambié las comillas

import { Empleado } from '../models/empleado'; // Cambié las comillas

declare var M: any;

@Component({

  selector: 'app-empleados',

  templateUrl: './empleados.component.html',

  styleUrls: ['./empleados.component.css'],

  providers: [EmpleadoService]

})

export class EmpleadosComponent implements OnInit {

  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit(): void {

  }

  agregarEmpleado(form?: NgForm) {

    this.empleadoService.PostEmpleado(form?.value)

      .subscribe(res => {

        this.resetForm(form);

        M.toast({ html: 'Guardado satisfactoriamente' });

      });

  }

  resetForm(form?: NgForm) { // Limpiar el formulario, recibe un formulario como parámetro

    if (form) {

      form.reset();

      this.empleadoService.selectedEmpleado = new Empleado();

    }

  }

}
