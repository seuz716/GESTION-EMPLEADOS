import { Injectable } from '@angular/core'; // Cambié las comillas

import { HttpClient } from '@angular/common/http'; // Cambié las comillas

import { Empleado } from '../components/models/empleado' ; // Cambié las comillas

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {

  selectedEmpleado: Empleado;
  empleados: Empleado[];
  readonly URL_API = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) {
    this.selectedEmpleado = new Empleado();
    this.empleados = [];
  }

  getEmpleados() {
    return this.http.get(this.URL_API);
  }

  PostEmpleado(empleado: Empleado) { // Cambié el nombre del parámetro a "empleado"
    return this.http.post(this.URL_API, empleado); // Cambié el nombre del parámetro a "empleado"
  }

  putEmpleado(empleado: Empleado) { // Cambié el nombre del parámetro a "empleado"
    return this.http.put(`${this.URL_API}/${empleado._id}`, empleado);
  }

  deleteEmpleado(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
