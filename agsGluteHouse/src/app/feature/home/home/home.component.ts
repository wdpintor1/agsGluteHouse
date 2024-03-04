import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { ServiciosComponent } from '../servicios/servicios.component';
import { TestimoniosComponent } from '../testimonios/testimonios.component';
import { TestimonioMockService } from '../../../shared/data/testimonio-mock.service';
@Component({
  selector: 'app-home', 
  standalone: true,
  imports: [
    NavBarComponent,
    ServiciosComponent,
    TestimoniosComponent
  ], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private testimoniosMockService: TestimonioMockService) { }
  testimonios: any[] = [];
  ngOnInit(): void {
    this.getTestimoniosData();
  }
  getTestimoniosData() {
    this.testimoniosMockService.getTestimonios().then(respuesta => {
      if (respuesta) {
        this.testimonios = respuesta;
      }
    });
  }
}





