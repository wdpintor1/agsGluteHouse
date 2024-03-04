import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioMockService } from '../../../shared/data/servicio-mock.service';
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent implements OnInit {

  constructor(private serviciosMockService: ServicioMockService) { }
  servicios: any[] = [];
  ngOnInit(): void {
    this.getServiciosData();
  }
  getServiciosData() {
    this.serviciosMockService.getServicios().then(respuesta => {
      if (respuesta) {
        this.servicios = respuesta;
      }
    });
  }
}
