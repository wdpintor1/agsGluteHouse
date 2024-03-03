import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioMockService } from '../../../shared/data/servicio-mock.service';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent
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
